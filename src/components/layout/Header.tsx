import styled from 'styled-components'
import Hamburger from '@components/layout/Hamburger/Hamburger'
import { PreHeader } from '@components/layout/PreHeader'
import Button from '@components/common/Button'
import useSticky from '@utils/hooks/useSticky'
import TopMenu from '@containers/Menus/TopMenu'
import { useRouter } from 'next/router'

interface HeaderProps {
  open: boolean
  setOpen: (open: boolean) => void
  isBanner: boolean
  isLoggedIn: boolean
  regular: boolean
}

export const Header: React.FC<HeaderProps> = ({
  open,
  setOpen,
  isBanner,
  isLoggedIn,
  regular,
}) => {
  const sticky = useSticky(30)
  const defaultClass = 'navbar header is-dark is-spacing '
  const headerClass =
    sticky || regular ? defaultClass + 'is-fixed-top' : defaultClass
  const router = useRouter()
  const containerClass = isBanner
    ? 'banner-page header-container'
    : 'header-container'

  const navigateLogin = () => {
    router.push('/login')
  }

  const navigateMember = () => {
    router.push('/admin')
  }

  return (
    <div className={containerClass}>
      <PreHeader />
      <nav
        className={`${headerClass}`}
        role="navigation"
        aria-label="main navigation "
      >
        <div className="container menu-container">
          <div className="navbar-brand">
            <LogoContainer className="logo-brand">
              <LogoBox>
                <a href="/" style={{ display: 'block', lineHeight: 1 }}>
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </LogoBox>
            </LogoContainer>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <TopMenu />
            </div>
            <div className="navbar-end navbar-item">
              {isLoggedIn ? (
                <Button onClick={navigateMember}>Гишүүдийн булан</Button>
              ) : (
                <Button onClick={navigateLogin} type={'is-link'}>
                  Нэвтрэх
                </Button>
              )}
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

Header.defaultProps = {
  regular: false,
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
