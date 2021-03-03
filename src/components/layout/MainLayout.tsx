import React, { useState } from 'react'
import { Header } from '@components/layout/Header'

import Drawer from '@components/layout/Drawer/Drawer'

interface MainLayoutProps {
  isBanner?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, isBanner }) => {
  const [open, letOpen] = useState(false)
  const setOpen = (val: boolean) => {
    letOpen(val)
    console.log('opening')
  }
  return (
    <div className={'wrapper ' + (open ? 'open' : '')}>
      <div className="main">
        <Header
          isBanner={isBanner ? isBanner : false}
          open={open}
          setOpen={setOpen}
        />
        <div className="content-wrapper">{children}</div>
      </div>
      <Drawer />
    </div>
  )
}

MainLayout.defaultProps = {
  isBanner: false,
}

export default MainLayout
