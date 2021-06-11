import React from 'react'

interface ButtonProps {
  onClick?: () => void
  type?: string
  submit?: boolean
}

const IntroButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  submit,
}) => {
  const buttonClass = 'button ' + type
  return (
    <button
      className={buttonClass}
      onClick={() => onClick}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  )
}

IntroButton.defaultProps = {
  type: 'is-primary',
  submit: false,
  onClick: () => null,
}

export default IntroButton
