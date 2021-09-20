import { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'

interface ActionProps {
  data: number
  onDelete: (id: number) => void
  onEditSquad: (id: number) => void
  onEdit: (id: number) => void
}

const TableActions: React.FC<ActionProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (e: React.MouseEvent<any>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { data, onDelete, onEdit, onEditSquad } = props
  return (
    <>
      <IconButton
        style={{ padding: 0 }}
        aria-label="more"
        aria-controls="template-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="card-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onEditSquad(data)}>Ээлж үүсгэх</MenuItem>
        <MenuItem onClick={() => onEdit(data)}>Засах</MenuItem>
        <MenuItem onClick={() => onDelete(data)}>Устгах</MenuItem>
      </Menu>
    </>
  )
}

export default TableActions
