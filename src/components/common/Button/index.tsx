import React from 'react'

interface ButtonProps {
  onClick: () => void
  type?: string
}

const IntroButton: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  const buttonClass = 'button ' + type
  return (
    <button className={buttonClass} onClick={() => onClick}>
      {children}
    </button>
  )
}

IntroButton.defaultProps = {
  type: 'is-primary',
}

export default IntroButton
