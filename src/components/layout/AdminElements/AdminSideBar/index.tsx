import React, { useState } from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/core/styles'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import { useRouter } from 'next/router'

interface AdminHeaderProps {}

const AdminSideBar: React.FC<AdminHeaderProps> = () => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <aside className="sidebar" id="sidebar-main">
      <div className="app-logo">
        <img src="/images/logo-dvc.svg" alt="logo" />
      </div>
      <div id="nav" className="side-nav">
        <ul className="navigation-left">
          <li className="nav-item">
            <span
              className="m-holder"
              onClick={() => router.push('/admin/matches/')}
            >
              <EmojiFlagsIcon />
              <span className="m-text">Match</span>
            </span>
          </li>
          <li className="nav-item is-expanded">
            <span className="m-holder">
              <AccountCircle />
              <span className="m-text">Invoice</span>
            </span>
            <div className="menu-expand">213123 213213 213213</div>
          </li>
        </ul>
        <div className="settings-menu">
          <SettingsIcon />
        </div>
      </div>
    </aside>
  )
}

const useStyles = makeStyles((theme) => ({}))

export default AdminSideBar
