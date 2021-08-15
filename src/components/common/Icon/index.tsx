import React from 'react'

interface ButtonProps {
  icon?: string
}

const Icon: React.FC<ButtonProps> = (props) => {
  const { icon } = props
  return (
    <span className="icon">
      <i className={'mdi ' + icon} />
    </span>
  )
}

Icon.defaultProps = {
  icon: 'mdi-bell',
}

export default Icon
