import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Box from '@material-ui/core/Box'
import TimeRange from '@components/common/TimeRange'
import Badge from '@material-ui/core/Badge'
import People from '@material-ui/icons/People'
import Radio from '@material-ui/core/Radio'

export interface SquadListProps {
  data: SquadListData
  onDelete?: (id: number) => void
  onExpandMembers?: (data: SquadListMembers[]) => void
  isDelete?: boolean
  isEdit?: boolean
  selectedId?: number
  onSelectChange?: (id: number) => void
}

const ListItemSquad: React.FC<SquadListProps> = (props) => {
  const {
    data,
    onDelete,
    onExpandMembers,
    isDelete,
    selectedId,
    isEdit,
    onSelectChange,
  } = props
  const classes = useStyles()

  return (
    <ListItem>
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
      <Box className={classes.time}>
        <TimeRange timeStart={data.time_start} timeEnd={data.time_end} />
      </Box>
      {isDelete ? (
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

const useStyles = makeStyles({
  time: {
    paddingRight: 10,
  },
})

ListItemSquad.defaultProps = {
  isDelete: true,
  isEdit: false,
}

export default ListItemSquad
