import SideMenu from '@containers/Menus/SideMenu'
import './styles.scss'
import Icon from '@components/common/Icon'
import useSticky from '@utils/hooks/useSticky'

interface DrawerProps {
  close: (val: boolean) => void
  isLoggedIn?: boolean
  exit?: () => void
}

const Drawer: React.FC<DrawerProps> = ({ close, isLoggedIn, exit }) => {
  const isShow = useSticky(30)
  return (
    <>
      <div className="off-canvas">
        {isShow ? (
          <div className="drawer-close" onClick={() => close(false)}>
            <Icon icon={'mdi-close mdi-24px'} />
          </div>
        ) : null}
        <SideMenu
          exit={exit ? exit : () => null}
          isLoggedIn={isLoggedIn ? isLoggedIn : false}
        />
      </div>
    </>
  )
}
export default Drawer
