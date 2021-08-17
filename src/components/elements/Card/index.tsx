import React from 'react'
import './card.scss'
import ImageThumb from '@components/elements/ImageThumb'

interface CardProps {
  onClick?: () => void
  data: any
  desc: string
  isDark?: boolean
}

const Card: React.FC<CardProps> = ({ data, onClick, desc, isDark }) => {
  return (
    <>
      <div className={`card ${isDark ? 'is-dark' : ''}`}>
        <div className="card-image">
          <ImageThumb
            desc={false}
            titleSize={14}
            data={data}
            onClick={() => onClick && onClick}
          />
        </div>
        <div className="card-content">
          <div className="content limit-3">{desc}</div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Дэлгэрэнгүй
          </a>
          <a href="#" className="card-footer-item">
            Бүртгүүлэх
          </a>
        </footer>
      </div>
    </>
  )
}

Card.defaultProps = {
  isDark: true,
}

export default Card
