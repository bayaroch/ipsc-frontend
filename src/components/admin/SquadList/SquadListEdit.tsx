import React from 'react'
import List from '@mui/material/List'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItemSquadEdit from './ListItemSquadEdit'

export interface SquadListProps {
  list: Array<SquadListData>
  onDelete?: (id: number) => void
  onExpandMembers: (members: SquadListMembers[]) => void
  isEdit?: boolean
  onSelectChange?: (id: number) => void
  selectedId: number | undefined
}

const SquadList: React.FC<SquadListProps> = (props) => {
  const {
    list,
    onExpandMembers,
    onDelete,
    isEdit,
    onSelectChange,
    selectedId,
  } = props
  return (
    <List>
      {list.map((item, index) => {
        return (
          <ListItemSquadEdit
            isEdit={isEdit}
            selectedId={selectedId}
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
