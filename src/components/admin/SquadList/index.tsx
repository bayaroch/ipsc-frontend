import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import List from '@material-ui/core/List'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItemSquad from './ListItemSquad'

export interface SquadListProps {
  list: Array<SquadListData>
  onDelete?: (id: number) => void
  onExpandMembers: (members: SquadListMembers[]) => void
  isEdit?: boolean
  onSelectChange?: (id: number) => void
  selectedId?: number
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
          <ListItemSquad
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
