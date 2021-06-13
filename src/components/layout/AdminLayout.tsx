import React, { useState } from 'react'
// import { Copyright } from '@components/layout/Copyright'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import '@common/css/adminlayout.scss'
import useAuthenticated from '@utils/hooks/useAuth'

interface MainLayoutProps {
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const [open, letOpen] = useState(true)
  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  useAuthenticated()
  return (
    <div>
      <div className={`main-content-wrap ${open ? 'sidenav-open' : ''}`}>
        <AdminHeader title={title ? title : ''} open={open} setOpen={setOpen} />
        <AdminSideBar />
        <div className="content-wrapper-admin">{children}</div>
      </div>
    </div>
  )
}

MainLayout.defaultProps = {
  title: 'IPSC admin',
}

export default MainLayout
