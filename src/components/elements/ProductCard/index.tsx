import React from 'react'
import './card.scss'
import ImageThumb from '@components/elements/ImageThumb'
import Link from 'next/link'
import _ from 'lodash'

export type Product = {
  title: string
  desc: string
  image?: string
  route?: string
  register?: string
}

interface CardProps {
  onClick?: () => void
  data: Product
  desc: string
  isDark?: boolean
}

const ProductCard: React.FC<CardProps> = ({ data, onClick, desc, isDark }) => {
  return (
    <>
      <div className={`card ${isDark ? 'is-dark' : ''}`}>
        <div className="card-image">
          <ImageThumb
            desc={false}
            titleSize={14}
            data={data}
            onClick={() => onClick && onClick()}
          />
        </div>
        <div className="card-content">
          <div className="content limit-3">{desc}</div>
        </div>
        <footer className="card-footer">
          {!_.isEmpty(data.route) ? (
            <Link passHref href={data.route !== undefined ? data.route : '#'}>
              <a className="card-footer-item">Дэлгэрэнгүй</a>
            </Link>
          ) : (
            <span className="card-footer-item no-content">Тун удахгүй</span>
          )}

          {!_.isEmpty(data.register) ? (
            <Link
              passHref
              href={data.register !== undefined ? data.register : '#'}
            >
              <a target="_blank" className="card-footer-item">
                Бүртгүүлэх
              </a>
            </Link>
          ) : null}
        </footer>
      </div>
    </>
  )
}

ProductCard.defaultProps = {
  isDark: true,
}

export default ProductCard
