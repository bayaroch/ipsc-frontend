import React from 'react'
import './introButton.scss'

interface IntroButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const IntroButton: React.FC<IntroButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <button className="intro-button primary" {...rest}>
        <div className="label">
          <span className="hover-effect" />
          <span className="label-text">{children}</span>
        </div>
      </button>
    </>
  )
}

IntroButton.defaultProps = {}

export default IntroButton
