import Icon from '@components/common/Icon'

export const PreHeader: React.FC = () => {
  return (
    <div className="preheader">
      <div className="container" style={{ height: '100%' }}>
        <div
          className="is-flex"
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            height: '100%',
          }}
        >
          <ul className="is-flex is-flex-direction-row">
            <li>
              <a className="social-small" href="" target="_blank">
                <Icon icon="is-small mdi-facebook" />
              </a>
            </li>
            <li>
              <a className="social-small" href="" target="_blank">
                <Icon icon="is-small mdi-instagram" />
              </a>
            </li>
            <li>
              <a className="social-small" href="" target="_blank">
                <Icon icon="is-small mdi-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
