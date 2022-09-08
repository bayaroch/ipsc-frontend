import React, { forwardRef, useState } from 'react'
import { TeamItem, TeamJoinParams } from '@services/team.service'
import PaperTable from '@components/common/PaperTable'
import {
  Button,
  Chip,
  Dialog,
  Slide,
  Typography,
  Box,
  SlideProps,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material'
import _ from 'lodash'
import CustomInput from '@components/common/Input'
import { LoadingButton } from '@mui/lab'

interface TeamProps {
  teams: TeamItem[]
  joinTeam: (params: TeamJoinParams) => void
  currentId: number
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Teams: React.FC<TeamProps> = ({ teams, currentId, joinTeam }) => {
  const [open, setOpen] = useState<TeamItem | null>(null)
  const [code, setCode] = useState<string>('')

  const handleClose = () => setOpen(null)

  const renderRow = (data: TeamItem, index: number) => {
    const isExist = _.find(data.team_members, { user: { id: currentId } })

    return (
      <TableRow key={index}>
        <TableCell>{data.id}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>
          <Stack direction={'row'} spacing={1}>
            {data.team_members.map((t, i) => {
              return (
                <Chip
                  size="small"
                  key={i}
                  label={
                    t.user ? `${t?.user?.lastname}. ${t?.user?.firstname}` : ''
                  }
                />
              )
            })}
          </Stack>
        </TableCell>
        <TableCell>
          {!isExist ? (
            <Button
              onClick={() => setOpen(data)}
              variant="contained"
              color="success"
            >
              Орох
            </Button>
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
              <TableCell sx={{ width: 40 }} align="center">
                ID
              </TableCell>
              <TableCell align="center">Нэр</TableCell>
              <TableCell align="center">Гишүүд</TableCell>
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
          <Typography>{open?.name}</Typography>
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
                joinTeam({ team_id: open.id, user_id: currentId, code: code })
                setOpen(null)
                setCode('')
              }
            }}
            variant="contained"
            color="success"
          >
            Орох
          </LoadingButton>
        </Box>
      </Dialog>
    </>
  )
}

export default Teams
