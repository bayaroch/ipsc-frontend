import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const useBadgeCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        badges: yup.array().min(1, "at least 1").required("required")
      }),
    []
  )

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      badges: [],
    },
    mode: 'all',
  })

  return {
    methods,
    Controller,
  }
}

export default useBadgeCreate
