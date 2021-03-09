import Router from 'next/router'
import { topmenu } from '@constants/top.menu'

const TopMenu: React.FC = () => {
  const menu = topmenu.map((item, index) => {
    if (item.is_parent == true && 'is_parent' in item) {
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
