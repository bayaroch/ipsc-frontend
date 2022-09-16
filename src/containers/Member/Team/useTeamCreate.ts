import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const useTeamCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Заавал бөглөх'),
        code: yup.string().required('Заавал бөглөх'),
        division_id: yup.number().required('Заавал бөглөх'),
      }),
    []
  )

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      code: '',
      division_id: 0,
    },
  })

  return {
    methods,
    Controller,
  }
}

export default useTeamCreate
