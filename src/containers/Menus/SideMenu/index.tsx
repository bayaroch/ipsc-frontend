import { mainmenu } from '@constants/top.menu'
import { Box } from '@mui/material'
import Router from 'next/router'

interface DrawerProps {
  isLoggedIn: boolean
  exit: () => void
}

const SideMenu: React.FC<DrawerProps> = ({ isLoggedIn, exit }) => {
  const memberMenu = () => {
    if (!isLoggedIn)
      return (
        <>
          <li className="custom-menu-list">
            <a>Тэмцээн</a>
          </li>
          <li className="custom-menu-list">
            <a>Гишүүдийн булан</a>
          </li>
          <li className="custom-menu-list">
            <a>Нэвтрэх</a>
          </li>
        </>
      )
  }

  const publicMenu = () => {
    if (isLoggedIn)
      return (
        <>
          <li className="custom-menu-list">
            <a>Тэмцээн</a>
          </li>
          <li className="custom-menu-list">
            <a onClick={() => exit && exit()}>Гарах</a>
          </li>
        </>
      )
  }

  const menu = mainmenu.map((item, index) => {
    return (
      <a
        className="custom-menu-list child-menu"
        onClick={() => Router.push(item.route)}
        key={index.toString()}
      >
        {item.label}
      </a>
    )
  })

  return (
    <>
      <aside className="offcanvas-menu">
        <ul className="menu-list">
          <Box
            sx={{
              display: { lg: 'none', md: 'block', sm: 'block', xs: 'block' },
            }}
          >
            {menu}
          </Box>
          <p className="menu-label" style={{ paddingLeft: '10px' }}>
            Гишүүдэд
          </p>
          {memberMenu()}
          {publicMenu()}
        </ul>
      </aside>
    </>
  )
}
export default SideMenu
