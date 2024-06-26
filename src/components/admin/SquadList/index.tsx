import React from 'react'
import List from '@mui/material/List'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItemSquad from './ListItemSquad'
import { ParticipantsItem } from '@services/match.services'

export interface SquadListProps {
  list: Array<SquadListData>
  onDelete?: (id: number) => void
  onExpandMembers: (members: SquadListMembers[]) => void
  isEdit?: boolean
  onSelectChange?: (id: number) => void
  userId: number
  tempId?: number
  filteredBy?: Array<ParticipantsItem>
  isAdmin?: boolean
}

const SquadList: React.FC<SquadListProps> = (props) => {
  const {
    list,
    onExpandMembers,
    onSelectChange,
    userId,
    tempId,
    isEdit,
    filteredBy,
    isAdmin
  } = props
  return (
    <List>
      {list.map((item, index) => {
        return (
          <ListItemSquad
            tempId={tempId}
            isEdit={isEdit ? isEdit : false}
            selectedId={userId}
            onSelectChange={onSelectChange && onSelectChange}
            onExpandMembers={onExpandMembers}
            key={index}
            data={item}
            nameMode={true}
            filteredBy={filteredBy}
            isAdmin={isAdmin ? isAdmin : false}
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
