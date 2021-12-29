import { footermenu } from '@constants/footer.menu'
import Link from 'next/link'

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
                    <Link key={index.toString()} href={item.route} passHref>
                      <li>
                        <a className="footer-item">{item.title}</a>
                      </li>
                    </Link>
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
