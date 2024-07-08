import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import _ from 'lodash'
import { SupportItem } from '@services/support.services'
import { helper } from '@utils/helpers/common.helper'
import { Typography } from '@mui/material'
import { ScoreItem } from '@services/match.services'
import { Add, MilitaryTech } from '@mui/icons-material'
import BadgeCreateDialog from '@containers/Member/Badge/BadgeCreateDialog'
import { MathSscoreBadgeParams, badgeServices } from '@services/badge.service'
import { Colors } from '@theme/colors'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch } from 'react-redux'
import searchStore from '@store/match'
const { actions } = searchStore

interface TableProps {
  data: ScoreItem[]
  groupTitle?: string
  classData: SupportItem[]
  isAdmin: boolean
}

const ScoreTable: React.FC<TableProps> = (props) => {
  const dispatch = useDispatch()
  const { data, groupTitle, classData, isAdmin } = props
  const [openBadge, setBadgeCreate] = useState<boolean>(false)
  const [currentMatchID, setCurrentMatchID] = useState<number>(0)
  const [currentID, setCurrentID] = useState<number>(0)
  const [currentBadges, setCurrentBadges] = useState<string>('')

  const setMatchScoreBadge = async (params: MathSscoreBadgeParams) => {
    // if (file && zip) {
    if (params) {
      console.log(params)
      try {
        const res = await badgeServices.setMatchScoreBadge(params)
        console.log('badges set:', res)
        dispatch(actions.getMatch(currentMatchID.toString()))
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Member</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Division</TableCell>
            <TableCell align="right">PF</TableCell>
            <TableCell align="right">Categories</TableCell>
            <TableCell align="right">Match Pts</TableCell>
            <TableCell align="right">Match %</TableCell>
            {isAdmin ? (
              <TableCell align="right">Medals</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">
                  {row.dq ? '(DQ)' : null}
                  {
                    row.badges ? 
                      row.badges.split(',').map((medal, i) => {
                        const color = medal.includes('Gold') ? Colors.gold : medal.includes('Silver') ? Colors.silver : Colors.bronze ;
                        return (
                          <Tooltip title={medal} placement="bottom">
                            <MilitaryTech key={i}
                              sx={{ position: 'relative', top: 4, color: color, mr: 0 }}
                            />
                          </Tooltip>
                          
                        )
                      })
                      : null
                  }
                  {row.user.firstname}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.user.usercode}</TableCell>
              <TableCell align="right">
                {_.get(
                  helper.classTitleHelper(row.user.class_id, classData),
                  'name',
                  ''
                )}
              </TableCell>
              <TableCell align="right">{groupTitle && groupTitle}</TableCell>
              <TableCell align="right">MINOR</TableCell>
              <TableCell align="right">
                {helper
                  .categoryTitleHelper(row.user.birthday, row.user.gender)
                  .map((c, index) => {
                    return `${index === 1 ? ' | ' : ''}${c.name}`
                  })}
              </TableCell>
              <TableCell align="right">{row.dq ? null : row.pts}</TableCell>
              <TableCell align="right">
                {row.dq ? null : `${row.percent}%`}
              </TableCell>
              
              <TableCell>
                {isAdmin ? (
                  <Stack direction={'row'} spacing={1}>
                      <IconButton
                        color="success"
                        onClick={() =>
                          {
                            setBadgeCreate(true)
                            setCurrentMatchID(row.match_id)
                            setCurrentID(row.id)
                            setCurrentBadges(row.badges)
                          }
                        }
                      >
                        <Add />
                      </IconButton>
                  </Stack>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {openBadge && (
        <BadgeCreateDialog
          handleClose={() => setBadgeCreate(false)}
          create={setMatchScoreBadge}
          open={openBadge}
          currentId={currentID}
          currentBadges={currentBadges}
        />
      )}
    </TableContainer>
  )
}

export default ScoreTable
