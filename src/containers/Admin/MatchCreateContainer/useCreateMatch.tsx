import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MatchCreateParams } from '@services/match.services'
import { MATCH_STATUS } from '@constants/common.constants'

export interface MatchCreateInputType {
  name: string
  match_start: string
  match_end: string
  registration_start: string
  registration_end: string
  lvl: number
  point_multiplier: number
  stage_number?: number
  tax?: number
  tax_info?: string
  min_point?: string
  additional_info?: string
  sponsor_info?: string
  per_squad: number
  is_public: boolean
  status: MATCH_STATUS
  last_modified_by?: number
}

const useCreateMatch = () => {
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
        additional_info: yup.string().max(400).notRequired(),
        sponsor_info: yup.string().max(400).notRequired(),
        last_modified_by: yup.number().notRequired(),
      }),
    []
  )

  const methods = useForm<MatchCreateInputType>({
    resolver: yupResolver(validationSchema),
  })

  return {
    methods,
    Controller,
  }
}

export default useCreateMatch
