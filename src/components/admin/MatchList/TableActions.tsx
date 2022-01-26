/* eslint-disable react/jsx-no-undef */
import Typography from '@mui/material/Typography'
import { DeleteOutlined, Edit, Group, GroupAdd } from '@mui/icons-material'
import { Box, Button, ButtonGroup } from '@mui/material'

interface ActionProps {
  data: number
  onDelete: (id: number) => void
  onEditSquad: (id: number) => void
  onEdit: (id: number) => void
  onConfirm: (id: number) => void
}

const TableActions: React.FC<ActionProps> = (props) => {
  const { data, onDelete, onEdit, onEditSquad, onConfirm } = props
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => {
            onEditSquad(data)
          }}
        >
          <GroupAdd fontSize="small" />
          <Typography style={{ marginLeft: 10, fontSize: 12 }}>
            Ээлж үүсгэх
          </Typography>
        </Button>
        <Button
          onClick={() => {
            onEdit(data)
          }}
        >
          <Edit fontSize="small" />
          <Typography style={{ marginLeft: 10, fontSize: 12 }}>
            Засах
          </Typography>
        </Button>

        <Button
          onClick={() => {
            onConfirm(data)
          }}
        >
          <Group fontSize="small" />
          <Typography style={{ marginLeft: 10, fontSize: 12 }}>
            Бүртгэл Баталгаажуулах
          </Typography>
        </Button>
        <Button
          onClick={() => {
            onDelete(data)
          }}
        >
          <DeleteOutlined fontSize="small" />
          <Typography style={{ marginLeft: 10, fontSize: 12 }}>
            Устгах
          </Typography>
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default TableActions
