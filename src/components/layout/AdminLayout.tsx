import React, { useState } from 'react'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import LargeSideBar from '@components/layout/AdminElements/LargeSidebar'
import '@common/css/adminlayout.scss'
import useAuthenticated from '@utils/hooks/useAuthenticated'
import { isMobile } from 'react-device-detect'

interface MainLayoutProps {
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const [open, letOpen] = useState(!isMobile)
  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  useAuthenticated()
  return (
    <div>
      <div className={`main-content-wrap ${open ? 'sidenav-open' : ''}`}>
        <AdminSideBar />
        <LargeSideBar />
        <div className="page-wrapper">
          <div className="main-content">
            <AdminHeader
              title={title ? title : ''}
              open={open}
              setOpen={setOpen}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

MainLayout.defaultProps = {
  title: 'IPSC admin',
}

export default MainLayout
