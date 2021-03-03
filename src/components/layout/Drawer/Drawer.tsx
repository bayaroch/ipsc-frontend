import Menu from './Menu'
import './styles.scss'
interface DrawerProps {}

const Drawer: React.FC<DrawerProps> = () => {
  return (
    <>
      <div className="off-canvas">
        <Menu />
      </div>
    </>
  )
}
export default Drawer
