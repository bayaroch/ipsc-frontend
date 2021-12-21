import ImageThumb from '@components/elements/ImageThumb'
import { featured } from '@constants/featured.menu'
import { Box } from '@mui/material'
import Link from 'next/link'

const Featured: React.FC = () => {
  const listItems = featured.map((item, index) => (
    <Box className="column" key={index.toString()}>
      <Link href={item.route} passHref>
        <a>
          <ImageThumb data={item} />
        </a>
      </Link>
    </Box>
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
