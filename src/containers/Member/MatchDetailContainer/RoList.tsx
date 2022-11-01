import React from 'react'
import PaperTable from '@components/common/PaperTable'
import {
  Typography,
  IconButton,
  Stack,
  TableCell,
  TableRow,
} from '@mui/material'
import { CheckCircle, DeleteForever, PersonRemove } from '@mui/icons-material'
import Link from 'next/link'
import { useConfirm } from 'material-ui-confirm'
import { RoItem, RoUpdateParams } from '@services/ro.services'

interface TeamProps {
  roData: RoItem[]
  update: (params: RoUpdateParams) => void
  isAdmin: boolean
  deleteRo: (params: number) => void
}

const RoList: React.FC<TeamProps> = ({ roData, update, isAdmin, deleteRo }) => {
  const confirm = useConfirm()

  const renderRow = (data: RoItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Link href={`/member/profile/${data.user.id}`} passHref>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, cursor: 'pointer' }}
            >
              {data.user.lastname}. {data.user.firstname}
            </Typography>
          </Link>
        </TableCell>
        <TableCell>{data.user.usercode}</TableCell>
        <TableCell>
          {data.is_verified ? 'Баталгаажсан' : '     -     '}
        </TableCell>
        <TableCell>
          {isAdmin ? (
            <Stack direction={'row'} spacing={1}>
              {data.is_verified ? (
                <IconButton
                  onClick={() =>
                    confirm({
                      title: 'Цуцлах',
                      description: 'Шүүгчийг цуцлах уу',
                      confirmationText: 'Тийм',
                      cancellationText: 'Үгүй',
                    })
                      .then(() => {
                        isAdmin && update({ id: data.id, is_verified: false })
                      })
                      .catch(() => null)
                  }
                >
                  <PersonRemove />
                </IconButton>
              ) : (
                <IconButton
                  color="success"
                  onClick={() =>
                    confirm({
                      title: 'Зөвшөөрөх',
                      description: 'Шүүгчийг зөвшөөрөх үү',
                      confirmationText: 'Тийм',
                      cancellationText: 'Үгүй',
                    })
                      .then(() => {
                        isAdmin && update({ id: data.id, is_verified: true })
                      })
                      .catch(() => null)
                  }
                >
                  <CheckCircle />
                </IconButton>
              )}
            </Stack>
          ) : null}
        </TableCell>
        <TableCell>
          {isAdmin ? (
            <IconButton
              color="info"
              onClick={() =>
                confirm({
                  title: 'Устгах',
                  description: 'Шүүгчийг устгах уу',
                  confirmationText: 'Тийм',
                  cancellationText: 'Үгүй',
                })
                  .then(() => {
                    isAdmin && deleteRo(data.id)
                  })
                  .catch(() => null)
              }
            >
              <DeleteForever />
            </IconButton>
          ) : null}
        </TableCell>
      </TableRow>
    )
  }
  return (
    <>
      <Typography variant="h3" align="center">
        Шүүгчид
      </Typography>
      <PaperTable
        renderRow={renderRow}
        data={roData}
        head={
          <>
            <TableRow>
              <TableCell align="center">Нэр</TableCell>
              <TableCell align="center">Код</TableCell>
              <TableCell align="center" sx={{ width: 160 }}>
                Төлөв
              </TableCell>
              <TableCell align="center" sx={{ width: 100 }}></TableCell>
              <TableCell align="center" sx={{ width: 100 }}></TableCell>
            </TableRow>
          </>
        }
      />
    </>
  )
}

export default RoList
