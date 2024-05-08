import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { validation } from '@constants/text.constants'

const usePublicMatchRegister = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        match_id: yup.number().required(validation.required),
        division_id: yup.number().required(validation.required).min(1),
        category_id: yup.number().required(validation.required).min(1),
        class_id: yup.number().required(validation.required),
        usercode: yup.string().required(validation.required).max(4).min(4),
        gender: yup.number().required(validation.required),
        remark: yup.string().nullable().when(validation.required, {
          is: 1,
          then: yup.string().required(),
        }),
        firstname: yup.string().required(validation.required),
        lastname: yup.string().required(validation.required),
        birthday: yup
          .date()
          .required(validation.required)
          .typeError(validation.date)
          .max(new Date(), 'Ирээдүйд төрж болохгүй')
          .nullable()
          .default(undefined),
        email: yup
          .string()
          .required(validation.required)
          .email(validation.email),
        phone_no: yup
          .string()
          .required(validation.required)
          .test('len', '8 оронтой тоо оруулна уу', (val) => val?.length === 8),
        register_no: yup.string().required(validation.required),
        is_main_club: yup.number().required(validation.required),
      }),
    []
  )

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      match_id: 0,
      division_id: 0,
      category_id: 0,
      class_id: 1,
      remark: '',
      usercode: '',
      firstname: '',
      lastname: '',
      email: '',
      user_type: 2,
      usertype: '',
      birthday: undefined,
      gender: 1,
      is_main_club: 1,
      remark_other: '',
      register_no: '',
      phone_no: '',
    },
    mode: 'all',
  })

  return {
    methods,
    Controller,
  }
}

export default usePublicMatchRegister
