import React from 'react'
import './introButton.scss'

interface IntroButtonProps {
  onClick: () => void
}

const IntroButton: React.FC<IntroButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button className="intro-button primary" type="button" onClick={onClick}>
        <div className="label">
          <span className="hover-effect"/>
          <span className="label-text">{children}</span>
        </div>
      </button>
    </>
  )
}

IntroButton.defaultProps = {}

export default IntroButton
