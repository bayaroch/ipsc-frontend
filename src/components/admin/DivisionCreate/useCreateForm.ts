import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from '@constants/text.constants'

export const initValues = {
  shorthand: '',
  name: '',
  remark: '',
}

export type InitValueType = {
  shorthand: string
  name: string
  remark: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useCreateForm = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        shorthand: yup.string().required(validation.required),
        name: yup.string().required(validation.required),
        remark: yup.string().nullable().notRequired(),
      }),
    []
  )

  const methods = useForm<InitValueType>({
    resolver: yupResolver(validationSchema),
    defaultValues: initValues,
  })

  return {
    Controller,
    methods,
    initValues,
  }
}

export default useCreateForm
