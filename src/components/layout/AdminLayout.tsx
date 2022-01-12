import React, { useState, useEffect, ReactNode } from 'react'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import LargeSideBar from '@components/layout/AdminElements/LargeSidebar'
import useCommonData from '@utils/hooks/useCommonData'
import withAuth from '@containers/withAuth'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserData } from '@services/auth.services'

interface LayoutProps {
  children: ReactNode
  title?: string
  currentUser: UserData
}

const AdminLayout: React.FC<LayoutProps> = ({
  children,
  currentUser,
  title,
}) => {
  const [open, letOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const openClass = open === true ? 'sidenav-open' : ''

  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  useCommonData()

  useEffect(() => {
    if (isMobile) {
      letOpen(false)
    } else {
      letOpen(true)
    }
  }, [isMobile])

  return (
    <div>
      <div className={`main-content-wrap ${openClass}`}>
        <AdminSideBar />
        <LargeSideBar />
        <div className="page-wrapper">
          <div className="main-content">
            <AdminHeader
              currentUser={currentUser}
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

AdminLayout.defaultProps = {
  title: 'IPSC admin',
}

export default withAuth(AdminLayout)
