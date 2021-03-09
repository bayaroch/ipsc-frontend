import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LoginLayout from '@components/layout/LoginLayout'
import { postsActions } from '@store/posts/postsActions'

const LoginPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postsActions.GetAllPost())
    return () => {}
  }, [])
  return (
    <>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" className="box">
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                  <input
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="mdi mdi-email"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    className="input"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="mdi mdi-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div className="field">
                <button className="button is-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

LoginPage.Layout = LoginLayout

export default LoginPage
