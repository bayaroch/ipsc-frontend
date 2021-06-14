import React, { useState } from 'react'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

import Drawer from '@components/layout/Drawer/Drawer'
import { Copyright } from '@components/layout/Copyright'
import './layout.scss'

interface MainLayoutProps {
  isBanner?: boolean
  darkMode?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isBanner,
  darkMode,
}) => {
  const [open, letOpen] = useState(false)
  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  return (
    <div
      className={
        'wrapper ' + (open ? 'open' : '') + (darkMode ? 'dark-theme' : '')
      }
    >
      <div className="main">
        <Header
          isBanner={isBanner ? isBanner : false}
          open={open}
          setOpen={setOpen}
        />
        <div className="content-wrapper">{children}</div>
        <Footer />
        <Copyright />
      </div>
      <Drawer close={setOpen} />
    </div>
  )
}

MainLayout.defaultProps = {
  isBanner: false,
  darkMode: false,
}

export default MainLayout
