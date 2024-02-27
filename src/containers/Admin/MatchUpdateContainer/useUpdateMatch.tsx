import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DivisionsItem, MatchUpdateParams } from '@services/match.services'
import { clearMatchData, updateMatch, getMatch } from '@store/match/actions'
import { MATCH_STATUS } from '@constants/common.constants'
import { useDispatch, useSelector } from 'react-redux'
import { createMetaSelector } from '@store/metadata/selectors'
import { updateResult, matchDetail } from '@store/match/selectors'
import { Meta } from '@store/metadata/actions/types'
import { SupportState } from '@store/support/reducers'
import { support as sup } from '@store/support/selectors'
import moment from 'moment'

const updateMatchesMeta = createMetaSelector(updateMatch)
const detailMeta = createMetaSelector(getMatch)

const defaultData = {
  name: '',
  match_start: '',
  match_end: '',
  registration_start: '',
  registration_end: '',
  match_type_id: 1,
  divisions: [],
  div_categories: [],
  lvl: 1,
  point_multiplier: 0,
  is_public: false,
  is_practice: false,
  per_squad: undefined,
  stage_number: undefined,
  status: 1,
  tax: 0,
  tax_info: '',
  min_point: undefined,
  additional_info: '',
  sponsor_info: '',
  last_modified: undefined,
}

export interface MatchUpdateInputType {
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  match_type_id: number
  divisions: string[]
  div_categories: DivisionsItem[]
  lvl: number
  point_multiplier: number
  stage_number?: number | undefined
  tax?: number
  tax_info?: string
  min_point?: string | undefined
  additional_info?: string
  sponsor_info?: string
  per_squad: number | undefined
  is_public: boolean
  is_practice: boolean
  status: MATCH_STATUS
}

const useUpdateMatch = (id: string) => {
  const dispatch = useDispatch()
  const metadata: Meta = useSelector(detailMeta)
  const updatemeta: Meta = useSelector(updateMatchesMeta)
  const response = useSelector(updateResult)
  const detail = useSelector(matchDetail)
  const [defaultValue, setDefaultValue] = useState<MatchUpdateInputType>(
    defaultData
  )
  const support: SupportState = useSelector(sup)

  useEffect(() => {
    dispatch(clearMatchData())
  }, [])

  useEffect(() => {
    if (detail !== undefined) {
      const divs = detail.match_divisions.map((div: any) => div.division_id.toString())
      const map1 = detail.match_divisions.map((x: any) => {
        const div: DivisionsItem = {
          id: x.id,
          name: x.name,
          division_id: x.division_id,
          category_ids: x.categories.split(','),
          is_multi: x.is_multi_cat,
          is_team: x.is_team_result,
        }
        return div
      });

      const formValue = Object.assign({}, detail, {
        match_start: moment(detail.match_start).format('YYYY-MM-DDTHH:mm'),
        match_end: moment(detail.match_end).format('YYYY-MM-DDTHH:mm'),
        registration_start: moment(detail.registration_start).format(
          'YYYY-MM-DDTHH:mm'
        ),
        registration_end: moment(detail.registration_end).format(
          'YYYY-MM-DDTHH:mm'
        ),
        divisions: divs,
        div_categories: map1,
      })
      setDefaultValue(formValue)
    }
  }, [detail])

  useEffect(() => {
    methods.reset(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getMatch(id))
    }
  }, [id])

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Field is required'),
        match_start: yup.string().required('Field is required'),
        match_end: yup.string().required('Field is required'),
        registration_start: yup.string().required('Field is required'),
        registration_end: yup.string().required('Field is required'),
        match_type_id: yup.number().required('Field is required'),
        lvl: yup.number().required('Field is required'),
        point_multiplier: yup.number().required('Field is required'),
        is_public: yup.bool().required('Field is required'),
        is_practice: yup.bool().required('Field is required'),
        per_squad: yup.number().required('Field is required'),
        stage_number: yup.number().notRequired(),
        status: yup.number().required('Field is required'),
        tax: yup.number().notRequired(),
        tax_info: yup.string().notRequired(),
        min_point: yup.number().notRequired(),
        additional_info: yup.string().max(10000).notRequired(),
        sponsor_info: yup.string().max(10000).notRequired(),
      }),
    []
  )

  const methods = useForm<MatchUpdateInputType>({
    resolver: yupResolver(validationSchema),
    defaultValues: useMemo(() => {
      return defaultValue
    }, [defaultValue]),
  })

  const update = (params: MatchUpdateParams) => {
    dispatch(updateMatch(params))
  }

  return {
    methods,
    update,
    Controller,
    metadata,
    updatemeta,
    response,
    detail,
    support,
  }
}

export default useUpdateMatch
