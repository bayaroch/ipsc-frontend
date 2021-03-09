import Icon from '@components/common/Icon'
import FooterMenu from '@containers/Menus/FooterMenu'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <div className="columns">
            <div className="column">
              <h6 className="has-text-white has-text-left mb-3">
                Холбоо барих
              </h6>
              <div className="has-text-left has-text-white mb-2  is-flex-direction-row is-flex">
                <Icon icon="is-small mdi-map-marker pr-3" />
                <p>
                  Монгол улс, Улаанбаатар хот, Хан-Уул дүүрэг, Алтай хотхоны
                  хойно, ОБЕГ-ын сургалтын төвийн зүүн талд
                </p>
              </div>
              <div className="has-text-left has-text-white mb-2 is-flex-direction-row is-flex">
                <Icon icon="is-small mdi-email pr-3" />
                <a href="mailto:info@IPSCAA.com">info@IPSCAA.com</a>
              </div>
              <div className="has-text-left has-text-white  mb-2 is-flex-direction-row is-flex">
                <Icon icon="is-small mdi-cellphone-sound  pr-3" />
                <a href="tel:8611-0200">8611-0200</a>
              </div>
            </div>
            <FooterMenu />
            <div className="column">
              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIPSCAA&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=338495889641646"
                  width="340"
                  height="130"
                  style={{ border: '0 none' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
