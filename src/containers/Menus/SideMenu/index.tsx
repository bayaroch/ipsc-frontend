interface DrawerProps {}

const SideMenu: React.FC<DrawerProps> = () => {
  return (
    <>
      <aside className="offcanvas-menu">
        <p className="menu-label">Гишүүдэд</p>
        <ul className="menu-list">
          <li className="custom-menu-list">
            <a>Тэмцээн</a>
          </li>
          <li className="custom-menu-list">
            <a>Нэвтрэх</a>
          </li>
          <li className="custom-menu-list">
            <a>Гарах</a>
          </li>
        </ul>
      </aside>
    </>
  )
}
export default SideMenu
