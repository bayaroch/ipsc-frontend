import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material/'
import useMemberConfirm from './useMemberConfirm'
import CustomList from '@components/common/List'
import CustomAvatar from '@components/common/Avatar'
import _ from 'lodash'
import { ParticipantsItem } from '@services/participant.service'
import { Cancel, Verified } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useEffect, useState } from 'react'

interface ConfirmContainerProps {
  id: string
}

const ConfirmContainer: React.FC<ConfirmContainerProps> = ({ id }) => {
  const { list, listMeta, detail, respond, respondMeta } = useMemberConfirm(id)
  const [current, setCurrent] = useState<number | null>(null)

  useEffect(() => {
    if (respondMeta.loaded && !respondMeta.error && !respondMeta.pending) {
      setCurrent(null)
    }
  }, [respondMeta])

  const renderLoader = () => {
    if (listMeta.pending && !listMeta.loaded && !listMeta.error) {
      return (
        <Box
          sx={{
            background: 'rgba(255,255,255,0.8)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box className="dot-flashing" />
        </Box>
      )
    }
  }

  const onRespond = (id: number, is_verified: boolean) => {
    respond({ id: id, data: { is_verified: is_verified } })
  }

  const renderRow = (item: ParticipantsItem, i: number) => {
    return (
      <ListItem
        key={i}
        ContainerComponent="div"
        sx={{ borderBottom: '1px solid #efefef' }}
      >
        <ListItemAvatar>
          <CustomAvatar src={item.user.img_url} alt={item.user.firstname} />
        </ListItemAvatar>
        <ListItemText
          primary={_.defaultTo(item.user.firstname, '')}
          secondary={_.defaultTo(item.user.usercode, '')}
        />
        <ListItemSecondaryAction>
          {item.is_verified ? (
            <LoadingButton
              onClick={() => {
                onRespond(item.id, false)
                setCurrent(item.id)
              }}
              loading={respondMeta.pending && current === item.id}
              variant="outlined"
              color="primary"
              startIcon={<Cancel />}
            >
              Цуцлах
            </LoadingButton>
          ) : (
            <LoadingButton
              variant="contained"
              color="primary"
              loading={respondMeta.pending && current === item.id}
              startIcon={<Verified />}
              onClick={() => {
                onRespond(item.id, true)
                setCurrent(item.id)
              }}
            >
              Баталгаажуулах
            </LoadingButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  return (
    <Box sx={{ position: 'relative', minHeight: 500 }}>
      {renderLoader()}
      {list && (
        <>
          <Typography variant="h1" sx={{ pb: 2 }} align="center">
            {detail && detail.name}
          </Typography>
          <CustomList
            data={list}
            renderRow={renderRow}
            ListEmptyComponent={<Typography>Бүртгэл хоосон байна</Typography>}
          />
        </>
      )}
    </Box>
  )
}

export default ConfirmContainer
