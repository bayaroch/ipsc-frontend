import React from 'react'
import _ from 'lodash'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import TimeRange from '@components/common/TimeRange'
import Radio from '@mui/material/Radio'
import { AvatarGroup, Typography } from '@mui/material'
import CustomAvatar from '@components/common/Avatar'
import { Colors } from '@theme/colors'

export interface SquadListProps {
  data: SquadListData
  onExpandMembers?: (data: SquadListMembers[]) => void
  selectedId?: number
  onSelectChange?: (id: number) => void
}

const ListItemSquad: React.FC<SquadListProps> = (props) => {
  const { data, onExpandMembers, selectedId, onSelectChange } = props

  return (
    <ListItem
      disablePadding
      sx={{
        padding: '10px 0',
        boxShadow: 1,
        mb: 2,
        mt: '40px',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -24,
          left: 10,
          height: 24,
          maxWidth: 310,
          width: 'auto',
          backgroundColor: Colors.grey[400],
          padding: '2px 10px',
          borderTopLeftRadius: '3px',
          borderTopRightRadius: '3px',
          overflow: 'hidden',
        }}
      >
        <Typography sx={{ color: '#fff', fontSize: 13 }} noWrap>
          {data.name}
        </Typography>
      </Box>
      <Box sx={{ flexDirection: 'row', display: 'flex' }}>
        <Radio
          checked={!!_.find(data.squad_members, { user_id: selectedId })}
          onChange={() => onSelectChange && onSelectChange(data.id)}
          value={data.id}
          name="radio-button"
        />

        <Box sx={{ paddingRight: 1 }}>
          <TimeRange
            sx={{ width: 126, paddingLeft: 1 }}
            timeStart={data.time_start}
            timeEnd={data.time_end}
          />
        </Box>
      </Box>

      <AvatarGroup
        max={3}
        onClick={() =>
          onExpandMembers &&
          !_.isEmpty(data.squad_members) &&
          onExpandMembers(data.squad_members)
        }
        style={{
          cursor: !_.isEmpty(data.squad_members) ? 'pointer' : 'inherit',
        }}
        sx={{
          alignItems: 'flex-start',
          marginRight: 2,
          '& .MuiAvatarGroup-avatar': {
            height: 24,
            width: 24,
            fontSize: 14,
          },
          maxWidth: 70,
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
    </ListItem>
  )
}

export default ListItemSquad
