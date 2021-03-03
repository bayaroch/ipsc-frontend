import styled from 'styled-components'
import Hamburger from '@components/layout/Hamburger/Hamburger'
import { PreHeader } from '@components/layout/PreHeader'
import Button from '@components/common/Button'
import './layout.scss'

interface HeaderProps {
  open: boolean
  setOpen: Function
  isBanner: boolean
}

export const Header: React.FC<HeaderProps> = ({ open, setOpen, isBanner }) => {
  const containerClass = isBanner
    ? 'banner-page header-container'
    : 'header-container'
  const navigateLogin = () => {}
  return (
    <div className={containerClass}>
      <PreHeader />
      <nav
        className="navbar header is-dark is-spacing"
        role="navigation"
        aria-label="main navigation "
      >
        <div className="container menu-container">
          <div className="navbar-brand">
            <LogoContainer>
              <LogoBox>
                <a href="" style={{ display: 'block', height: 80 }}>
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </LogoBox>
            </LogoContainer>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Танилцуулга</a>
              <a className="navbar-item">Спортын дүрэм</a>
              <a className="navbar-item">Тэмцээн</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Бусад</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">Апп</a>
                  <a className="navbar-item">Газрууд</a>
                </div>
              </div>
            </div>
            <div className="navbar-end navbar-item">
              <Button onClick={navigateLogin} type={'is-link'}>
                Нэвтрэх
              </Button>
            </div>
          </div>
          <div className="hamburger-holder">
            <Hamburger open={open} setOpen={setOpen} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export const LogoContainer = styled.div`
  margin:5px;
  width:80px;
}
`

export const LogoBox = styled.div`

}
`
