import React from 'react'
import { Autoplay } from 'swiper'
import './logoLogin.scss'

const LogoLogin: React.FC = () => {
  return (
    <>
      <div className="logo-header">
        <h1 className="login-title">Login</h1>
        <div className="logo-login">
          <img src="/images/logo-dvc.svg" />
        </div>
        <p>IPSC Action Air Members</p>
      </div>
    </>
  )
}

LogoLogin.defaultProps = {}

export default LogoLogin
