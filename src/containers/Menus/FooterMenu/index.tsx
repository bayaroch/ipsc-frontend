import Router from 'next/router'
import { footermenu } from '@constants/footer.menu'

const FooterMenu: React.FC = () => {
  return (
    <>
      {footermenu.map((item, index) => {
        return (
          <div className="column" key={index.toString()}>
            <h6 className="has-text-white has-text-left mb-2">
              {item.sectionTitle}
            </h6>
            <ul
              style={{ listStyleType: 'none', marginLeft: 5 }}
              className="has-text-left"
            >
              {item.menu &&
                item.menu.map(function (item, index) {
                  return (
                    <li key={index.toString()}>
                      <a
                        className="footer-item"
                        onClick={() => Router.push(item.route)}
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
        )
      })}
    </>
  )
}
export default FooterMenu
