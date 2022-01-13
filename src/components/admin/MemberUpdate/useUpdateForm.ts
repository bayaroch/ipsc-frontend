import { GENDER, USER_TYPE } from '@constants/user.constants'
import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from '@constants/text.constants'
import { UserCreateParams } from '@services/account.services'

export const initValues = {
  usercode: '',
  firstname: '',
  lastname: '',
  email: '',
  birthday: '',
  usertype: USER_TYPE.USER_REGULAR,
  gender: GENDER.MALE,
  enabled: true,
  class_id: 1,
  img_url: '',
  mo_badge: 0,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useUpdateForm = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        usercode: yup.string().required(validation.required),
        password: yup.string().notRequired(),
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
        img_url: yup.string().nullable().notRequired(),
        mo_badge: yup.number().nullable().notRequired(),
      }),
    []
  )

  const methods = useForm<Omit<UserCreateParams, 'id'>>({
    resolver: yupResolver(validationSchema),
    defaultValues: initValues,
  })

  return {
    Controller,
    methods,
    initValues,
  }
}

export default useUpdateForm
