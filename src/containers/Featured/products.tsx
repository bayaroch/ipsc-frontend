import './styles.scss'
import Card from '@components/elements/Card'
import { featuredproducts } from '@constants/featured.course'
import Router from 'next/router'

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const listItems = featuredproducts.map((item, index) => (
    <div className="column" key={index.toString()}>
      <Card
        desc={item.desc}
        data={item}
        onClick={() => {
          Router.push(item.route)
        }}
      />
    </div>
  ))

  return (
    <>
      <section style={{ background: '#1c1c1c' }}>
        <div className="container">
          <h3 className="is-3 section-title">Онцлох Сургалтууд</h3>
          <div className="columns pb-5 pt-2">{listItems}</div>
        </div>
      </section>
    </>
  )
}
export default Products
