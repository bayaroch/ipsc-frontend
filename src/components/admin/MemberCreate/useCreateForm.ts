import { GENDER, USER_TYPE } from '@constants/user.constants'
import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from '@constants/text.constants'
import { UserCreateParams } from '@services/account.services'

export const initValues = {
  usercode: '',
  password: '',
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  usertype: USER_TYPE.USER_REGULAR,
  gender: GENDER.MALE,
  enabled: true,
  class_id: 1,
}

const useCreateForm = () => {
  const digitsOnly = (value: any) => /^\d+$/.test(value)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        usercode: yup
          .string()
          .required(validation.required)
          .test(validation.digitsOnly, validation.digitsOnly, digitsOnly),
        password: yup
          .string()
          .required(validation.required)
          .matches(
            /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/,
            '6 оронтой нэг тоо нэг том үсэг орсон байх'
          ),
        firstname: yup.string().required(validation.required),
        email: yup
          .string()
          .required(validation.required)
          .email(validation.email),
        lastname: yup.string().required(validation.required),
        birthday: yup
          .date()
          .typeError(validation.date)
          .max(new Date(), 'Ирээдүйд төрж болохгүй'),
        usertype: yup.number().required(validation.required),
        gender: yup.number().required(validation.required),
        enabled: yup.boolean().required(validation.required),
        class_id: yup.number().required(validation.required),
      }),
    []
  )

  const methods = useForm<UserCreateParams>({
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
