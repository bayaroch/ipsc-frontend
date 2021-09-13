import Router from 'next/router'
import { topmenu } from '@constants/top.menu'

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
                  <a
                    className="navbar-item"
                    onClick={() => Router.push(item.route)}
                    key={index.toString()}
                  >
                    {item.label}
                  </a>
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
                  <a
                    className="navbar-item"
                    onClick={() => Router.push(item.route)}
                    key={index.toString()}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        )
      }
    } else {
      return (
        <a
          className="navbar-item"
          onClick={() => {
            if (item.route) {
              Router.push(item.route)
            }
          }}
          key={index.toString()}
        >
          {item.label}
        </a>
      )
    }
  })

  return <>{menu}</>
}
export default TopMenu
