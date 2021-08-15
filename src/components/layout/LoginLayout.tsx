import React from 'react'
import { Copyright } from '@components/layout/Copyright'

const LoginLayout: React.FC = ({ children }) => {
  return (
    <div className={'login-layout'}>
      <div className="main">
        <div className="content-wrapper">{children}</div>
        <Copyright />
      </div>
    </div>
  )
}

export default LoginLayout
