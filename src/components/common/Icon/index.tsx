import React from 'react'

interface ButtonProps {
  icon?: string
}

const Icon: React.FC<ButtonProps> = ({ icon }) => {
  return (
    <span className="icon">
      <i className={'mdi ' + icon}></i>
    </span>
  )
}

Icon.defaultProps = {
  icon: 'mdi-bell',
}

export default Icon
