import { useEffect } from 'react'
import LoginLayout from '@components/layout/LoginLayout'
import LogoLogin from '@components/elements/LogoLogin'
import Button from '@components/common/Button'
import useLoginForm from '@utils/hooks/useLoginForm'
import { isAuth } from '@store/auth/selectors'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const { register, onSubmit, errors } = useLoginForm()

  const router = useRouter()
  const isLoggedIn = useSelector(isAuth)

  useEffect(() => {
    console.log()
    if (isLoggedIn === true) {
      router.push('/admin/')
    }
    return () => {}
  }, [isLoggedIn])

  return (
    <>
      <div className="container">
        <div className="columns is-centered is-flex">
          <form action="" className="box" onSubmit={onSubmit}>
            <LogoLogin />
            <div className="field">
              <label className="label">Usercode</label>
              <div className="control has-icons-left">
                <input
                  type="text"
                  placeholder="e.g. 077"
                  className="input"
                  name="usercode"
                  required={true}
                  ref={register}
                />
                <span className="icon is-small is-left">
                  <i className="mdi mdi-email" />
                </span>
              </div>
              <p>{errors.usercode?.message}</p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  type="password"
                  placeholder="*******"
                  name="password"
                  className="input"
                  required={true}
                  ref={register}
                />
                <span className="icon is-small is-left">
                  <i className="mdi mdi-lock" />
                </span>
              </div>
              <p>{errors.password?.message}</p>
            </div>
            <div className="field">
              <Button type="is-link is-fullwidth" submit={true}>
                Login
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
