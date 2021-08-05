import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import List from '@material-ui/core/List'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItemSquad from './ListItemSquad'

export interface SquadListProps {
  list: Array<SquadListData>
  onDelete: (id: number) => void
  onExpandMembers: (members: SquadListMembers[]) => void
}

const SquadList: React.FC<SquadListProps> = (props) => {
  const { list, onExpandMembers, onDelete } = props
  return (
    <List>
      {list.map((item, index) => {
        return (
          <ListItemSquad
            onDelete={onDelete}
            onExpandMembers={onExpandMembers}
            key={index}
            data={item}
          />
        )
      })}
    </List>
  )
}

const useStyles = makeStyles({
  loader: {
    fontSize: 12,
  },
  loaderBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  pagination: {
    position: 'relative',
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    '& .MuiPagination-ul': {
      width: '100%',
      justifyContent: 'center',
    },
  },
})

export default SquadList
