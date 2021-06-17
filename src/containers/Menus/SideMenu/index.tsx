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

  return (
    <>
      <aside className="offcanvas-menu">
        <p className="menu-label">Гишүүдэд</p>
        <ul className="menu-list">
          {memberMenu()}
          {publicMenu()}
        </ul>
      </aside>
    </>
  )
}
export default SideMenu
