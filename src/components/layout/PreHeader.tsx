import './layout.scss'
interface PreHeaderProps {}

export const PreHeader: React.FC<PreHeaderProps> = () => {
  return (
    <div className="preheader">
      <span className="icon is-large">
        <i className="mdi mdi-36px mdi-bell"></i>
      </span>
    </div>
  )
}
