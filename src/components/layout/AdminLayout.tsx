import React, { useState, useEffect, ReactNode } from 'react'
import AdminHeader from '@components/layout/AdminElements/AdminHeader'
import AdminSideBar from '@components/layout/AdminElements/AdminSideBar'
import LargeSideBar from '@components/layout/AdminElements/LargeSidebar'
import useCommonData from '@utils/hooks/useCommonData'
import withAuth from '@containers/withAuth'
import useMediaQuery from '@mui/material/useMediaQuery'
import { UserData } from '@services/auth.services'
import { logOut } from '@store/auth/actions'
import { useDispatch } from 'react-redux'

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
  // const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:900px)')

  const openClass = open === true ? 'sidenav-open' : ''
  const dispatch = useDispatch()

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

  const onCloseClick = () => setOpen(false)
  const handleLogOut = () => dispatch(logOut())

  return (
    <div>
      <div className={`main-content-wrap ${openClass}`}>
        <AdminSideBar onLogOut={handleLogOut} currentUser={currentUser} />
        <LargeSideBar onCloseClick={onCloseClick} />
        <div className="page-wrapper">
          <div className="main-content">
            <AdminHeader
              currentUser={currentUser}
              title={title ? title : ''}
              open={open}
              setOpen={setOpen}
              handleLogOut={handleLogOut}
            />
            {currentUser && children}
          </div>
        </div>
      </div>
    </div>
  )
}

AdminLayout.defaultProps = {
  title: 'IPSC Acton Air',
}

export default withAuth(AdminLayout)
