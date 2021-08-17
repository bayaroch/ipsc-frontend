import React, { useState } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

import Drawer from '@components/layout/Drawer/Drawer'
import { Copyright } from '@components/layout/Copyright'
import useAuth from '@utils/hooks/useAuth'

interface MainLayoutProps {
  isBanner?: boolean
  darkMode?: boolean
  regular?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isBanner,
  darkMode,
  regular,
}) => {
  const [open, letOpen] = useState(false)
  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  const { isLoggedIn, exit } = useAuth()

  return (
    <div
      className={
        'wrapper ' + (open ? 'open' : '') + (darkMode ? 'dark-theme' : '')
      }
    >
      <div className="main">
        <Header
          regular={regular ? regular : false}
          isLoggedIn={isLoggedIn}
          isBanner={isBanner ? isBanner : false}
          open={open}
          setOpen={setOpen}
        />
        <div className="content-wrapper">{children}</div>
        <Footer />
        <Copyright />
      </div>
      <Drawer exit={exit} isLoggedIn={isLoggedIn} close={setOpen} />
    </div>
  )
}

MainLayout.defaultProps = {
  isBanner: false,
  darkMode: false,
  regular: false,
}

export default MainLayout
