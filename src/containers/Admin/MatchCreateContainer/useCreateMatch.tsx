import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MatchCreateParams } from '@services/match.services'
import { clearMatchData, createMatch } from '@store/match/actions'
import { MATCH_STATUS } from '@constants/common.constants'
import { useDispatch, useSelector } from 'react-redux'
import { createMetaSelector } from '@store/metadata/selectors'
import { createResult } from '@store/match/selectors'
import { Meta } from '@store/metadata/actions/types'

const createMatchesMeta = createMetaSelector(createMatch)

export interface MatchCreateInputType {
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  lvl: number
  point_multiplier: number
  stage_number?: number | undefined
  tax?: number | undefined | string
  tax_info?: string
  min_point?: string | undefined
  additional_info?: string
  sponsor_info?: string
  per_squad: number | undefined
  is_public: boolean
  status: MATCH_STATUS
}

const useCreateMatch = () => {
  const dispatch = useDispatch()
  const metadata: Meta = useSelector(createMatchesMeta)
  const response = useSelector(createResult)

  useEffect(() => {
    dispatch(clearMatchData())
  }, [])

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Field is required'),
        match_start: yup.string().required('Field is required'),
        match_end: yup.string().required('Field is required'),
        registration_start: yup.string().required('Field is required'),
        registration_end: yup.string().required('Field is required'),
        lvl: yup.number().required('Field is required'),
        point_multiplier: yup.number().required('Field is required'),
        is_public: yup.bool().required('Field is required'),
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

  const methods = useForm<MatchCreateInputType>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      match_start: '',
      match_end: '',
      registration_start: '',
      registration_end: '',
      lvl: 1,
      point_multiplier: 1,
      is_public: false,
      per_squad: 10,
      stage_number: 4,
      status: 1,
      tax: 0,
      tax_info: '',
      min_point: '',
      additional_info: '',
      sponsor_info: '',
    },
  })

  const create = (params: MatchCreateParams) => {
    dispatch(createMatch(params))
  }

  return {
    methods,
    create,
    Controller,
    metadata,
    response,
  }
}

export default useCreateMatch
