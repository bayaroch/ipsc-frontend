import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface SquadCreateInputType {
  name: string
  remark: string
  locked: boolean
  time_end: string
  time_start: string
}
export interface SquadValidateType {
  name: string
  remark: string
  locked: boolean
}

const useSquadCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Заавал бөглөх'),
        remark: yup.string().notRequired(),
      }),
    []
  )

  const methods = useForm<SquadValidateType>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      remark: '',
      locked: false,
    },
  })

  return {
    methods,
    Controller,
  }
}

export default useSquadCreate
