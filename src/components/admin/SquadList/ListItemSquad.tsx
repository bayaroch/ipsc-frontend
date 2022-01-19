import React from 'react'
import _ from 'lodash'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import TimeRange from '@components/common/TimeRange'
import Badge from '@mui/material/Badge'
import People from '@mui/icons-material/People'
import Radio from '@mui/material/Radio'
import { AvatarGroup } from '@mui/material'
import CustomAvatar from '@components/common/Avatar'

export interface SquadListProps {
  data: SquadListData
  onDelete?: (id: number) => void
  onExpandMembers?: (data: SquadListMembers[]) => void
  isEdit?: boolean
  selectedId?: number
  onSelectChange?: (id: number) => void
}

const ListItemSquad: React.FC<SquadListProps> = (props) => {
  const {
    data,
    onDelete,
    onExpandMembers,
    selectedId,
    isEdit,
    onSelectChange,
  } = props

  return (
    <ListItem disablePadding>
      {isEdit ? (
        <Radio
          checked={selectedId === data.id}
          onChange={() => onSelectChange && onSelectChange(data.id)}
          value={data.id}
          name="radio-button"
        />
      ) : null}

      <ListItemAvatar>
        <Badge
          badgeContent={data.squad_members.length}
          style={{
            cursor: !_.isEmpty(data.squad_members) ? 'pointer' : 'inherit',
          }}
          onClick={() =>
            onExpandMembers &&
            !_.isEmpty(data.squad_members) &&
            onExpandMembers(data.squad_members)
          }
          color="primary"
        >
          <People />
        </Badge>
      </ListItemAvatar>

      <ListItemText
        primary={data.name}
        secondary={data.remark ? data.remark : null}
      />
      <AvatarGroup
        max={5}
        sx={{
          alignItems: 'flex-start',
          marginRight: 2,
          '& .MuiAvatarGroup-avatar': {
            height: 24,
            width: 24,
            fontSize: 14,
          },
        }}
      >
        {data.squad_members.map((item, index) => {
          return (
            <CustomAvatar
              key={index}
              sx={{ height: 24, width: 24 }}
              src={item.user?.img_url}
              alt={item.user.firstname}
            />
          )
        })}
        )
      </AvatarGroup>

      <Box sx={{ paddingRight: 1 }}>
        <TimeRange timeStart={data.time_start} timeEnd={data.time_end} />
      </Box>

      {onDelete ? (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={() => onDelete && onDelete(data.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      ) : null}
    </ListItem>
  )
}

ListItemSquad.defaultProps = {
  isEdit: false,
}

export default ListItemSquad
