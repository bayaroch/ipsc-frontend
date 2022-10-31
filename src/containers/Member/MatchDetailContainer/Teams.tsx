import React, { forwardRef, useState } from 'react'
import {
  TeamItem,
  TeamJoinParams,
  TeamLeaveParams,
} from '@services/team.service'
import PaperTable from '@components/common/PaperTable'
import {
  Button,
  Chip,
  Dialog,
  Slide,
  Typography,
  Box,
  SlideProps,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material'
import _ from 'lodash'
import CustomInput from '@components/common/Input'
import { LoadingButton } from '@mui/lab'
import { UserData } from '@services/auth.services'
import { USER_TYPE } from '@constants/user.constants'
import { Delete } from '@mui/icons-material'
import Link from 'next/link'
import { useConfirm } from 'material-ui-confirm'

interface TeamProps {
  teams: TeamItem[]
  joinTeam: (params: TeamJoinParams) => void
  currentUser: UserData
  leaveTeam: (params: TeamLeaveParams) => void
  deleteTeam?: (id: string) => void
  myDivisionId?: number
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Teams: React.FC<TeamProps> = ({
  teams,
  currentUser,
  joinTeam,
  leaveTeam,
  deleteTeam,
  myDivisionId,
}) => {
  const [open, setOpen] = useState<TeamItem | null>(null)
  const [code, setCode] = useState<string>('')

  const confirm = useConfirm()

  const handleClose = () => setOpen(null)

  const renderRow = (data: TeamItem, index: number) => {
    const isExist = _.find(data.team_members, { user: { id: currentUser.id } })
    const divisionMatch = myDivisionId
      ? data.division.id === myDivisionId
      : true

    const pK = isExist
      ? _.find(data.team_members, { user: { id: currentUser.id } })?.id
      : null

    // eslint-disable-next-line no-console
    console.log(!isExist && divisionMatch)

    return (
      <TableRow key={index}>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.division.name}</TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1}>
            {data.team_members.map((t, i) => {
              return (
                <Link key={i} href={`/member/profile/${t.user.id}`}>
                  <Chip
                    size="small"
                    label={
                      t.user
                        ? `${t?.user?.lastname}. ${t?.user?.firstname}`
                        : ''
                    }
                  />
                </Link>
              )
            })}
          </Stack>
        </TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1}>
            {!isExist && divisionMatch ? (
              <Button
                onClick={() => setOpen(data)}
                variant="contained"
                color="success"
                size="small"
              >
                Нэгдэх
              </Button>
            ) : null}
            {isExist ? (
              <Button
                size="small"
                onClick={() =>
                  confirm({
                    title: 'Багаас гарах',
                    description: 'Та багаас гарах гэж байна.',
                    confirmationText: 'Тийм',
                    cancellationText: 'Үгүй',
                  })
                    .then(() => {
                      pK && leaveTeam({ primary_key: pK })
                    })
                    .catch(() => null)
                }
                variant="contained"
                color="warning"
              >
                Гарах
              </Button>
            ) : null}
          </Stack>
        </TableCell>
        <TableCell>
          {currentUser.usertype === USER_TYPE.USER_ADMIN ||
          data.user.id === currentUser.id ? (
            <IconButton
              onClick={() =>
                confirm({
                  title: 'Баг устгах',
                  confirmationText: 'Тийм',
                  cancellationText: 'Үгүй',
                })
                  .then(() => {
                    deleteTeam && deleteTeam(data.id.toString())
                  })
                  .catch(() => null)
              }
            >
              <Delete />
            </IconButton>
          ) : null}
        </TableCell>
      </TableRow>
    )
  }
  return (
    <>
      <PaperTable
        renderRow={renderRow}
        data={teams}
        head={
          <>
            <TableRow>
              <TableCell align="center">Нэр</TableCell>
              <TableCell align="center">Ангилал</TableCell>
              <TableCell align="center">Гишүүд</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </>
        }
      />
      <Dialog
        open={open !== null ? true : false}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">{open?.name}</Typography>
          <Typography>{open?.division.name}</Typography>
          <CustomInput
            required={true}
            fullWidth={true}
            labelPrimary="Код"
            value={code}
            type="text"
            onChange={(v) => setCode(v.target.value)}
            placeholder={''}
          />
          <LoadingButton
            onClick={() => {
              if (open !== null) {
                joinTeam({
                  team_id: open.id,
                  user_id: currentUser.id,
                  code: code,
                })
                setOpen(null)
                setCode('')
              }
            }}
            variant="contained"
            color="success"
          >
            Нэгдэх
          </LoadingButton>
        </Box>
      </Dialog>
    </>
  )
}

export default Teams
