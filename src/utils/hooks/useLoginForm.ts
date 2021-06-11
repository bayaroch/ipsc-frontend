import { useForm } from 'react-hook-form'
import { useCallback, useMemo } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { authActions } from '@store/auth/actions/index'
import * as yup from 'yup'

const useLoginForm = () => {
  const dispatch = useDispatch()

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        usercode: yup.string().required('Гишүүнчлэлийн дугаараа оруул'),
        password: yup.string().required('Нууц үгээ оруул'),
      }),
    []
  )

  const { register, handleSubmit, errors } = useForm<any>({
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = useCallback((formValues: any) => {
    dispatch(authActions.login(formValues))
  }, [])

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}

export default useLoginForm
