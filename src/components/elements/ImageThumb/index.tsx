import React from 'react'

export type Product = {
  title: string
  desc: string
  image?: string
  route?: string
  register?: string
}

interface ImageThumbProps {
  data: Product
  desc?: boolean
  titleSize?: number
}

const ImageThumb: React.FC<ImageThumbProps> = ({
  data,

  desc,
  titleSize,
}) => {
  return (
    <div className="is-2by1 image">
      <div className="thumb-inner">
        <div className="tile-bgs" aria-hidden="true">
          <div
            className="bg-img"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundColor: '#000',
            }}
          />
        </div>
        <div className="tile-content">
          <div className="text-wrapper">
            <div className="tile-title">
              <h3 style={titleSize ? { fontSize: titleSize } : {}}>
                {data.title}
              </h3>
            </div>
            {desc ? (
              <div className="tile-desc">
                <h3>{data.desc}</h3>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

ImageThumb.defaultProps = {
  desc: true,
}

export default ImageThumb
