import { Avatar, AvatarProps } from '@mui/material/'
import { Colors } from '@theme/colors'
import _ from 'lodash'

const CustomAvatar: React.FC<AvatarProps> = (props) => {
  const colorIndex = props.alt ? props.alt.toUpperCase().charCodeAt(0) % 11 : 0
  let backgroundColor = props.src ? 'none' : Colors.avatar[colorIndex]
  if (!props.alt) {
    backgroundColor = '#4D4D4D'
  }

  if (props.src) {
    return <Avatar {...props} alt={props.alt} />
  }
  const zIndex = _.get(props, 'style.zIndex')
  return (
    <Avatar
      {...props}
      style={{
        backgroundColor: backgroundColor,
        zIndex: _.isNumber(zIndex) ? zIndex : undefined,
      }}
    >
      {props.alt ? props.alt.toUpperCase().charAt(0) : ''}
    </Avatar>
  )
}

CustomAvatar.defaultProps = {
  alt: '',
}

export default CustomAvatar
