import React, { useState, useEffect, ReactNode } from 'react'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import LargeSideBar from '@components/layout/AdminElements/LargeSidebar'
import useCommonData from '@utils/hooks/useCommonData'
import withAuth from '@containers/withAuth'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

interface LayoutProps {
  children: ReactNode
  title?: string
}

const AdminLayout: React.FC<LayoutProps> = (props) => {
  const [open, letOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const setOpen = (val: boolean) => {
    letOpen(val)
  }
  useCommonData()

  useEffect(() => {
    if (matches) {
      letOpen(false)
    } else {
      letOpen(true)
    }
  }, [])

  return (
    <div>
      <div className={`main-content-wrap ${open ? 'sidenav-open' : ''}`}>
        <AdminSideBar />
        <LargeSideBar />
        <div className="page-wrapper">
          <div className="main-content">
            <AdminHeader
              title={props.title ? props.title : ''}
              open={open}
              setOpen={setOpen}
            />
            {props.children}
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
