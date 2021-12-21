import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DeleteOutlined, Edit, GroupAdd } from '@mui/icons-material'

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
        <MenuItem
          onClick={() => {
            onEditSquad(data)
            setAnchorEl(null)
          }}
        >
          <GroupAdd fontSize="small" />
          <Typography style={{ marginLeft: 10 }}>Ээлж үүсгэх</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            onEdit(data)
            setAnchorEl(null)
          }}
        >
          <Edit fontSize="small" />
          <Typography style={{ marginLeft: 10 }}>Засах</Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            onDelete(data)
            setAnchorEl(null)
          }}
        >
          <DeleteOutlined fontSize="small" />
          <Typography style={{ marginLeft: 10 }}>Устгах</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default TableActions
