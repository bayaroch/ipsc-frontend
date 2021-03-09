import React from 'react'
import { Copyright } from '@components/layout/Copyright'

interface LoginLayoutProps {}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className={'login-layout'}>
      <div className="main">
        <div className="content-wrapper">{children}</div>
        <Copyright />
      </div>
    </div>
  )
}

LoginLayout.defaultProps = {
  isBanner: false,
  darkMode: false,
}

export default LoginLayout
