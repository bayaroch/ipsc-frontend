import './styles.scss'
interface DrawerProps {}

const Menu: React.FC<DrawerProps> = () => {
  return (
    <>
      <aside className="offcanvas-menu">
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li className="custom-menu-list">
            <a>Payments</a>
          </li>
          <li className="custom-menu-list">
            <a>Transfers</a>
          </li>
          <li className="custom-menu-list">
            <a>Balance</a>
          </li>
        </ul>
      </aside>
    </>
  )
}
export default Menu
