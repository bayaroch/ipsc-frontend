import React from 'react'
import './ImageThumb.scss'

interface ImageThumbProps {
  onClick: () => void
  data: any
}

const ImageThumb: React.FC<ImageThumbProps> = ({ data, onClick }) => {
  return (
    <div className="is-2by1 image">
      <div className="thumb-inner" onClick={onClick}>
        <div className="tile-bgs" aria-hidden="true">
          <div
            className="bg-img"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundColor: '#000',
            }}
          ></div>
        </div>
        <div className="tile-content">
          <div className="text-wrapper">
            <div className="tile-title">
              <h3>{data.title}</h3>
            </div>
            <div className="tile-desc">
              <h3>{data.desc}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ImageThumb.defaultProps = {}

export default ImageThumb
