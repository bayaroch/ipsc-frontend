import { topmenu } from '@constants/top.menu'
import Link from 'next/link'

interface TopMenuProps {
  isLoggedIn: boolean
}

const TopMenu: React.FC<TopMenuProps> = ({ isLoggedIn }) => {
  const menu = topmenu.map((item, index) => {
    if (item.is_parent === true && 'is_parent' in item) {
      if (item.isMember === true) {
        return isLoggedIn ? (
          <div
            className="navbar-item has-dropdown is-hoverable"
            key={index.toString()}
          >
            <a className="navbar-link">{item.label}</a>
            <div className="navbar-dropdown">
              {item.child_menu.map(function (item, index) {
                return (
                  <Link key={index.toString()} href={item.route} passHref>
                    <a className="navbar-item">{item.label}</a>
                  </Link>
                )
              })}
            </div>
          </div>
        ) : (
          ''
        )
      } else {
        return (
          <div
            className="navbar-item has-dropdown is-hoverable"
            key={index.toString()}
          >
            <a className="navbar-link">{item.label}</a>
            <div className="navbar-dropdown">
              {item.child_menu.map(function (item, index) {
                return (
                  <Link key={index.toString()} href={item.route} passHref>
                    <a className="navbar-item">{item.label}</a>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return (
        <Link
          key={index.toString()}
          href={item.route ? item.route : 'javascript:void(0)'}
          passHref
        >
          <a className="navbar-item">{item.label}</a>
        </Link>
      )
    }
  })

  return <>{menu}</>
}
export default TopMenu
