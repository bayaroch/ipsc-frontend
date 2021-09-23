import ProductCard from '@components/elements/ProductCard'
import { featuredproducts } from '@constants/featured.course'
import { useRouter } from 'next/router'

const Products: React.FC = () => {
  const router = useRouter()
  const listItems = featuredproducts.map((item, index) => (
    <div className="column" key={index.toString()}>
      <ProductCard
        desc={item.desc}
        data={item}
        isDark={true}
        onClick={() => {
          router.push(item.route)
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
