import React from 'react'
import List from '@mui/material/List'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItemSquad from './ListItemSquad'

export interface SquadListProps {
  list: Array<SquadListData>
  onDelete?: (id: number) => void
  onExpandMembers: (members: SquadListMembers[]) => void
  isEdit?: boolean
  onSelectChange?: (id: number) => void
  userId: number
}

const SquadList: React.FC<SquadListProps> = (props) => {
  const {
    list,
    onExpandMembers,
    onDelete,
    isEdit,
    onSelectChange,
    userId,
  } = props
  return (
    <List>
      {list.map((item, index) => {
        return (
          <ListItemSquad
            isEdit={isEdit}
            selectedId={userId}
            onSelectChange={onSelectChange && onSelectChange}
            onDelete={onDelete && onDelete}
            onExpandMembers={onExpandMembers}
            key={index}
            data={item}
          />
        )
      })}
    </List>
  )
}

SquadList.defaultProps = {
  isEdit: false,
}

export default SquadList
