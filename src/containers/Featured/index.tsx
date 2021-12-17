import ImageThumb from '@components/elements/ImageThumb'
import { featured } from '@constants/featured.menu'
import Link from 'next/link'

const Featured: React.FC = () => {
  const listItems = featured.map((item, index) => (
    <div className="column" key={index.toString()}>
      <Link href={item.route}>
        <ImageThumb data={item} />
      </Link>
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
