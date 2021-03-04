import styled from 'styled-components'
import Hamburger from '@components/layout/Hamburger/Hamburger'
import { PreHeader } from '@components/layout/PreHeader'
import Button from '@components/common/Button'
import useSticky from '@utils/hooks/useSticky'
import './layout.scss'

interface HeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  isBanner: boolean
}

export const Header: React.FC<HeaderProps> = ({ open, setOpen, isBanner }) => {
  const sticky = useSticky(30)
  const defaultClass = 'navbar header is-dark is-spacing '
  const headerClass = sticky ? defaultClass + 'is-fixed-top' : defaultClass
  const containerClass = isBanner
    ? 'banner-page header-container'
    : 'header-container'
  const navigateLogin = () => {}
  return (
    <div className={containerClass}>
      <PreHeader />
      <nav
        className={headerClass}
        role="navigation"
        aria-label="main navigation "
      >
        <div className="container menu-container">
          <div className="navbar-brand">
            <LogoContainer className="logo-brand">
              <LogoBox>
                <a href="" style={{ display: 'block', lineHeight: 1 }}>
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </LogoBox>
            </LogoContainer>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Танилцуулга</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Апп</a>
                  <a className="navbar-item">Газрууд</a>
                </div>
              </div>
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
  margin-right:20px;
  @media(max-width:1024px) {
    width:50px;
    margin:5px auto
  }
}
`

export const LogoBox = styled.div`

}
`
