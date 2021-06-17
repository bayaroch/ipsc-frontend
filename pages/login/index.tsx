import { useEffect } from 'react'
import LoginLayout from '@components/layout/LoginLayout'
import LogoLogin from '@components/elements/LogoLogin'
import Button from '@components/common/Button'
import useLoginForm from '@utils/hooks/useLoginForm'
import { LoginInput } from '@utils/hooks/useLoginForm'
import { isAuth } from '@store/auth/selectors'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import CustomInput from '@components/common/Input'
import { CircularProgress, Box } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import _ from 'lodash'

const LoginPage = () => {
  const { methods, submitLogin, Controller, metadata } = useLoginForm()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const router = useRouter()
  const isLoggedIn = useSelector(isAuth)
  const isLoading = metadata.pending && !metadata.error && !metadata.loaded
  const isError = metadata.error && !metadata.pending

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push('/admin/')
    }
    return () => {}
  }, [isLoggedIn])

  const onSubmit = (data: LoginInput) => {
    submitLogin(data)
  }

  return (
    <>
      <div className="container">
        <div className="columns is-centered is-flex">
          <form action="" className="box" onSubmit={handleSubmit(onSubmit)}>
            <LogoLogin />
            <Box>
              {isError ? (
                <Alert severity="warning">
                  Failed to Login. Please check usercode and password!
                </Alert>
              ) : null}
            </Box>
            <Controller
              name="usercode"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <CustomInput
                  {...rest}
                  inputRef={ref}
                  required={true}
                  labelPrimary="UserCode"
                  placeholder={'e.g. 077'}
                  fullWidth={true}
                  error={!!errors.usercode}
                  helperText={
                    errors.usercode ? _.get(errors.usercode, 'message', '') : ''
                  }
                />
              )}
            />
            <br />

            <Controller
              name="password"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <CustomInput
                  {...rest}
                  inputRef={ref}
                  required={true}
                  labelPrimary="Password"
                  placeholder={'*******'}
                  type="password"
                  fullWidth={true}
                  error={!!errors.password}
                  helperText={
                    errors.password ? _.get(errors.password, 'message', '') : ''
                  }
                />
              )}
            />
            <br />
            <br />
            <div className="field">
              <Button type="is-link is-fullwidth" submit={true}>
                {isLoading ? (
                  <CircularProgress style={{ height: 14, width: 14 }} />
                ) : (
                  <>Login</>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

LoginPage.Layout = LoginLayout

export default LoginPage
