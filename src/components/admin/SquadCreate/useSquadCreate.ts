import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface SquadCreateInputType {
  name: string
  remark: string
  time_end: string
  time_start: string
}

export interface SquadValidateType {
  name: string
  remark: string
}

const useSquadCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Field is required'),
        remark: yup.string().notRequired(),
      }),
    []
  )

  const methods = useForm<SquadValidateType>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      remark: '',
    },
  })

  return {
    methods,
    Controller,
  }
}

export default useSquadCreate
