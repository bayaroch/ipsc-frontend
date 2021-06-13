import React, { useState } from 'react'
import { Copyright } from '@components/layout/Copyright'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import '@common/css/adminlayout.scss'
import useAuthenticated from '@utils/hooks/useAuth'

interface MainLayoutProps {
  isBanner?: boolean
  darkMode?: boolean
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [open, letOpen] = useState(false)
  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  useAuthenticated()
  return (
    <div>
      <div className="admin-main">
        <AdminHeader open={open} setOpen={setOpen} />
        <div className="content-wrapper">{children}</div>
        <Copyright />
      </div>
    </div>
  )
}

MainLayout.defaultProps = {
  isBanner: false,
  darkMode: false,
}

export default MainLayout
