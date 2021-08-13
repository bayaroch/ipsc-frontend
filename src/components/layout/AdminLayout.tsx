import React, { useState, useEffect } from 'react'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import LargeSideBar from '@components/layout/AdminElements/LargeSidebar'
import useCommonData from '@utils/hooks/useCommonData'
import { isMobile } from 'react-device-detect'
import withAuth from '@containers/withAuth'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

interface MainLayoutProps {
  title?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const [open, letOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  console.log(matches)
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
  }, [matches])

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

export default withAuth(MainLayout)
