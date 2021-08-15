import './styles.scss'
import ImageThumb from '@components/elements/ImageThumb'
import { featured } from '@constants/featured.menu'
import Router from 'next/router'

const Featured: React.FC = () => {
  const listItems = featured.map((item, index) => (
    <div className="column" key={index.toString()}>
      <ImageThumb
        data={item}
        onClick={() => {
          Router.push(item.route)
        }}
      />
    </div>
  ))

  return (
    <>
      <div className="featured-section">
        <div className="columns is-gapless">{listItems}</div>
      </div>
    </>
  )
}
export default Featured
