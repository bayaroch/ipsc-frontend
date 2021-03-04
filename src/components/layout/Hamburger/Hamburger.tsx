import React from 'react'
import './styles.scss'

interface HamburgerProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const Hamburger: React.FC<HamburgerProps> = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={
          'hamburger hamburger--slider js-hamburger ' +
          (open ? 'is-active' : '')
        }
        onClick={() => setOpen(!open)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </>
  )
}

Hamburger.defaultProps = {
  open: false,
}

export default Hamburger
