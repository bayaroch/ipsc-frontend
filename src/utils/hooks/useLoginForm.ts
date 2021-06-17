import { useForm, Controller } from 'react-hook-form'
import { useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { createMetaSelector } from '@store/metadata/selectors'
import * as yup from 'yup'
import { login } from '@store/auth/actions'
import { Meta } from '@store/metadata/actions/types'

export interface LoginInput {
  usercode: string
  password: string
}

const createLoginMeta = createMetaSelector(login)

const useLoginForm = () => {
  const dispatch = useDispatch()
  const metadata: Meta = useSelector(createLoginMeta)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        usercode: yup.string().required('Гишүүнчлэлийн дугаараа оруул'),
        password: yup.string().required('Нууц үгээ оруул'),
      }),
    []
  )

  const methods = useForm<LoginInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      usercode: '',
      password: '',
    },
  })

  const submitLogin = (params: LoginInput) => {
    dispatch(login(params))
  }

  return {
    methods,
    Controller,
    submitLogin,
    metadata,
  }
}

export default useLoginForm
