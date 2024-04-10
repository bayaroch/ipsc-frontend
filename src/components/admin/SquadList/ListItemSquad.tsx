import React from 'react'
import _ from 'lodash'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import { AvatarGroup, Typography, Chip, Stack } from '@mui/material'
import CustomAvatar from '@components/common/Avatar'
import { Colors } from '@theme/colors'
import LockIcon from '@mui/icons-material/Lock'
import { ParticipantsItem } from '@services/match.services'

export interface SquadListProps {
  data: SquadListData
  onExpandMembers?: (data: SquadListMembers[]) => void
  selectedId?: number
  onSelectChange?: (id: number) => void
  nameMode?: boolean
  isEdit: boolean
  tempId?: number
  filteredBy?: Array<ParticipantsItem>
  isAdmin?: boolean
}

const ListItemSquad: React.FC<SquadListProps> = (props) => {
  const {
    data,
    onExpandMembers,
    selectedId,
    onSelectChange,
    isEdit,
    nameMode,
    tempId,
    filteredBy,
    isAdmin,
  } = props

  return (
    <ListItem
      disablePadding
      sx={{
        padding: '12px 0 8px 0',
        boxShadow: 1,
        mb: 2,
        mt: '40px',
        justifyContent: 'space-between',
        height: 'auto',
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
          { data.locked ? (
            <LockIcon sx={{verticalAlign:"middle"}}/>
          ) : null}
          {data.name}
        </Typography>
      </Box>
      <Box sx={{ flexDirection: 'row', display: 'flex' }}>
        {isEdit ? (
          <Radio
            checked={
              !!_.find(data.squad_members, { user_id: selectedId }) ||
              data.id === tempId
            }
            onChange={() => onSelectChange && onSelectChange(data.id)}
            value={data.id}
            name="radio-button"
            disabled={!isAdmin ? data.locked : false}
          />
        ) : null}

        <Box
          sx={{
            paddingRight: 1,
            paddingLeft: 2,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          {_.isEmpty(data.squad_members) ? '-' : null}
          {nameMode === false ? (
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
              {_.isEmpty(data.squad_members)
                ? null
                : filteredBy && filteredBy.length > 0 ?
                  data.squad_members.filter((item) => filteredBy.map((item) => item.user_id).includes(item.user_id)).map((item, index) => {
                    return (
                      <CustomAvatar
                        key={index}
                        sx={{ height: 24, width: 24 }}
                        src={item.user?.img_url}
                        alt={item.user.firstname}
                      />
                    )
                  })
                  :
                  data.squad_members.map((item, index) => {
                    return (
                      <CustomAvatar
                        key={index}
                        sx={{ height: 24, width: 24 }}
                        src={item.user?.img_url}
                        alt={item.user.firstname}
                      />
                    )
                  })
                }
              )
            </AvatarGroup>
          ) : (
            <Stack direction="row" spacing={1} flexWrap={'wrap'}>
              {_.isEmpty(data.squad_members)
                ? null
                : filteredBy && filteredBy.length > 0 ?
                  data.squad_members.filter((item) => filteredBy.map((item) => item.user_id).includes(item.user_id)).map((item, index) => {
                    return (
                      <Chip
                        size={'small'}
                        sx={{ height: 24, mb: 0.5 }}
                        key={index}
                        label={`${item.user?.lastname}. ${item.user?.firstname}`}
                      />
                    )
                  })
                  :
                  data.squad_members.map((item, index) => {
                    return (
                      <Chip
                        size={'small'}
                        sx={{ height: 24, mb: 0.5 }}
                        key={index}
                        label={`${item.user?.lastname}. ${item.user?.firstname}`}
                      />
                    )
                  })
              }
            </Stack>
          )}
        </Box>
      </Box>
    </ListItem>
  )
}

export default ListItemSquad
