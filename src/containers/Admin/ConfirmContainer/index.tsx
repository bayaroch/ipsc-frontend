import {
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Typography,
  Dialog,
  Divider,
  Button,
  ButtonGroup,
  SlideProps,
  Slide,
} from '@mui/material/'
import useMemberConfirm from './useMemberConfirm'
import CustomList from '@components/common/List'
import CustomAvatar from '@components/common/Avatar'
import _ from 'lodash'
import { ParticipantsItem } from '@services/participant.service'
import { Cancel, Delete, Edit, Verified } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useEffect, useState, forwardRef } from 'react'
import { helper } from '@utils/helpers/common.helper'
import MatchDivisionPicker from '@components/member/MatchDivisionPicker'
import { useConfirm } from 'material-ui-confirm'
import SquadList from '@components/admin/SquadList'
import { SquadHelper } from '@store/squads/reducers/helpers'
import { SquadChangeParams, SquadJoinParams } from '@services/squad.services'
import { Colors } from '@theme/colors'

interface ConfirmContainerProps {
  id: string
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ConfirmContainer: React.FC<ConfirmContainerProps> = ({ id }) => {
  const {
    list,
    listMeta,
    detail,
    respond,
    respondMeta,
    divisions,
    update,
    deleteMember,
    sList,
    join,
    change,
  } = useMemberConfirm(id)
  const [current, setCurrent] = useState<number | null>(null)
  const [open, setOpen] = useState<ParticipantsItem | null>(null)
  const [curPar, setCurPar] = useState<ParticipantsItem | null>(null)
  const [showSquad, setShowSquad] = useState<boolean>(false)
  const confirm = useConfirm()

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
    respond({
      id: id,
      data: { is_verified: Number(is_verified), team_id: null },
    })
  }

  const onSubmit = (division: number) => {
    const isRegistered = list.find((user) => user?.user?.id === open?.user_id)
    if (isRegistered && open) {
      const params = {
        data: {
          division_id: division,
        },
        id: isRegistered.id,
      }
      confirm({
        title: 'Division солих ',
        description: `Та ${open.user.firstname} нэртэй оролцогчийн division солих гэж байна`,
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => {
          update(params)
          setOpen(null)
        })
        .catch(() => setOpen(null))
    }
  }

  const onDelete = (id: number) => {
    confirm({
      title: 'Оролцогч устгах ',
      confirmationText: 'Тийм',
      cancellationText: 'Үгүй',
    })
      .then(() => {
        deleteMember(id)
      })
      .catch(() => setOpen(null))
  }

  const onSelectChange = (id: number, user_id: number) => {
    const existSquad = SquadHelper.isExist(sList, user_id)

    const existInThis = SquadHelper.isExistInThis(sList, user_id, id)

    if (!existInThis && curPar) {
      confirm({
        title: 'Скуад сонголт',
        description: existSquad
          ? 'Та скуад өөрчлөх гэж байна.'
          : 'Та шинээр скуад сонгож байна',
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => {
          if (existSquad) {
            const params: SquadChangeParams = {
              data: {
                squad_id: id,
                user_id: user_id,
                is_rm: false,
                is_ro: false,
                notify_squad_id: null,
              },
              id: existSquad,
            }

            change(params)
          } else {
            const params: SquadJoinParams = {
              squad_id: id,
              user_id: user_id,
              is_rm: false,
              is_ro: false,
              notify_squad_id: null,
            }
            join(params)
          }
        })
        .catch(() => {
          // setSelectedData(undefined)
        })
    } else if (!existInThis) {
      confirm({
        title: 'Скуад дүүрсэн байна.',
        description: `Тэмцээний нэг скуадад орох оролцогчдын хязгаар: ${detail.per_squad}.`,
        confirmationText: 'Ок',
        cancellationText: null,
      })
        .then(() => null)
        .catch(() => {
          // setSelectedData(undefined)
        })
    }
  }

  const renderRow = (item: ParticipantsItem, i: number) => {
    return (
      <ListItem
        key={i}
        ContainerComponent="div"
        sx={{ borderBottom: '1px solid #efefef' }}
      >
        <ListItemAvatar sx={{ minWidth: 75 }}>
          <Chip
            label={_.get(
              helper.groupTitleHelper(item.division_id, divisions),
              'shorthand',
              ''
            )}
            icon={<Edit sx={{ fontSize: 11 }} />}
            onClick={() => setOpen(item)}
          />
        </ListItemAvatar>
        <ListItemAvatar sx={{ minWidth: 75 }}>
          <Chip
            label={'squad'}
            icon={<Edit sx={{ fontSize: 11 }} />}
            onClick={() => {
              console.log('hmm: ', item)
              setCurPar(item)
              setShowSquad(true)
              console.log('current Particiapnt: ', curPar)
              console.log('show Squad: ', showSquad)
            }}
          />
        </ListItemAvatar>
        <ListItemAvatar>
          <CustomAvatar src={item.user.img_url} alt={item.user.firstname} />
        </ListItemAvatar>
        <ListItemText
          primary={_.defaultTo(item.user.firstname, '')}
          secondary={_.defaultTo(item.user.usercode, '')}
        >
          asdasd
        </ListItemText>
        <ListItemSecondaryAction>
          {item.is_verified ? (
            <LoadingButton
              onClick={() => {
                onRespond(item.id, false)
                setCurrent(item.id)
              }}
              loading={respondMeta.pending && current === item.id}
              variant="outlined"
              size="small"
              color="primary"
              startIcon={<Cancel />}
            >
              Cancel
            </LoadingButton>
          ) : (
            <LoadingButton
              variant="contained"
              color="primary"
              size="small"
              loading={respondMeta.pending && current === item.id}
              startIcon={<Verified />}
              onClick={() => {
                onRespond(item.id, true)
                setCurrent(item.id)
              }}
            >
              Confirm
            </LoadingButton>
          )}
          <IconButton onClick={() => onDelete(item.id)}>
            <Delete />
          </IconButton>
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
      {divisions && (
        <MatchDivisionPicker
          open={open ? true : false}
          isRo={false}
          divisions={divisions}
          onSubmit={onSubmit}
          handleClose={() => setOpen(null)}
        />
      )}
      {showSquad && curPar && (
        <Dialog
          fullScreen
          open={curPar ? true : false}
          onClose={() => setCurPar(null)}
          TransitionComponent={Transition}
        >
          <ButtonGroup
            fullWidth
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button
              style={{ borderRadius: 0, borderColor: Colors.white }}
              onClick={() => setCurPar(null)}
            >
              Close
            </Button>
          </ButtonGroup>
          <Divider />
          <Box>
            <SquadList
              isEdit={true}
              userId={curPar?.user_id}
              onSelectChange={(id) => onSelectChange(id, curPar?.user_id)}
              onExpandMembers={() => null}
              list={sList}
              isAdmin={true}
            />
          </Box>
      </Dialog> 
      )}
    </Box>
  )
}

export default ConfirmContainer
