import { useState } from 'react'
import { Box, Typography, Grid, Paper, Button } from '@mui/material/'
import _ from 'lodash'
import ContentBox from '@components/admin/ContentBox'
import MatchDivisionPicker from '@components/member/MatchDivisionPicker'
import ParticipantsTable from '@components/member/ParticipantsTable'

import About from '@containers/Member/MatchDetailContainer/About'
import Info from '@containers/Member/MatchDetailContainer//Info'
import TimeBox from '@containers/Member/MatchDetailContainer//TimeBox'
import Participants from '@containers/Member/MatchDetailContainer//Participants'
import useToast from '@utils/hooks/useToast'
import MemberList from '@containers/Member/MatchDetailContainer//MemberList'
import Score from '@containers/Member/MatchDetailContainer//Scores'
import HTMLParser from '@components/common/HtmlParser'
import WaitingTable from '@components/member/ParticipantsTable/WaitingTable'
import { MatchItem } from '@store/match/actions/types'
import { SupportState } from '@store/support/reducers'
import { Meta } from '@store/metadata/actions/types'
import {
  groupByDivision,
  groupByDivisionScore,
} from '@store/match/selectors/helpers'
import { helper } from '@utils/helpers/common.helper'
import Link from 'next/link'

interface PublicMatchDetailProps {
  detail: MatchItem
  support: SupportState
  meta: Meta
}

const PublicMatchDetail: React.FC<PublicMatchDetailProps> = ({
  detail,
  support,
  meta,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [member, setMember] = useState<boolean>(false)

  const verified = _.filter(detail.participants, (p) => !!p.is_verified)
  const grouped = groupByDivision(verified)
  // eslint-disable-next-line no-console
  console.log('grouped', grouped)

  const scores = groupByDivisionScore(detail.match_scores)
  const waitingList = _.filter(detail.participants, (p) => !p.is_verified)
  const progress = helper.matchStatusTitle(detail)
  const isRegisterActive = helper.isRegisterActive(
    _.get(detail, 'registration_start', ''),
    _.get(detail, 'registration_end', '')
  )

  const { addToast } = useToast()

  const handleClose = () => setOpen(false)

  const renderRegisterButton = () => {
    if (isRegisterActive) {
      return (
        <Link href={`/match/register?id=${detail.id}`}>
          <Button type="submit" variant="contained" color="primary">
            Бүртгүүлэх
          </Button>
        </Link>
      )
    }
    return <Box></Box>
  }

  const renderContent = () => {
    if (
      !meta.pending &&
      !meta.error &&
      meta.loaded &&
      detail &&
      support.divisions &&
      support.class
    ) {
      return (
        <>
          <MatchDivisionPicker
            isRo={false}
            validate={(v) => addToast({ message: v, severity: 'warning' })}
            open={open}
            divisions={support.divisions}
            isOpenOnly={false}
            onSubmit={() => null}
            handleClose={handleClose}
          />
          <ContentBox>
            <section style={{ paddingTop: 15, paddingBottom: 15 }}>
              <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}>
                  <Grid item xs={12} lg={4}>
                    <Box mb={6}>
                      <TimeBox detail={detail} />
                    </Box>
                    <Box mb={6}>
                      <About detail={detail} progress={progress} />
                    </Box>
                    <Box mb={6}>
                      <Participants
                        openList={() => {
                          setMember(true)
                        }}
                        detail={detail}
                      />
                    </Box>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.sponsor_info) ? (
                          <Info
                            detail={
                              <Typography>{detail.sponsor_info}</Typography>
                            }
                            title="Спонсор"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.tax_info) ? (
                          <Info
                            detail={
                              <Typography component="span">
                                <HTMLParser
                                  html={detail.tax_info ? detail.tax_info : ''}
                                />
                              </Typography>
                            }
                            title="Tax Info"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={8}>
                    <Box mb={6}>
                      <Paper>
                        {!_.isEmpty(detail.additional_info) ? (
                          <Info
                            detail={detail.additional_info}
                            title="Нэмэлт мэдээлэл"
                          />
                        ) : null}
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </section>
            {!_.isEmpty(grouped) ? (
              <>
                <ParticipantsTable
                  classData={support.class}
                  divisions={support.divisions}
                  data={grouped}
                />
              </>
            ) : null}

            {_.isEmpty(scores) ? (
              <>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  padding={3}
                >
                  <Typography variant="h3">Хүлээлгийн жагсаалт</Typography>
                </Box>
                <WaitingTable
                  data={waitingList}
                  classData={support.class}
                  divisions={support.divisions}
                />
              </>
            ) : null}

            {!_.isEmpty(scores) ? (
              <Score
                classData={support.class}
                divisions={support.divisions}
                data={scores}
              />
            ) : null}

            <Box
              display="flex"
              justifyContent="center"
              mt={5}
              alignItems="center"
            >
              {renderRegisterButton()}
            </Box>
          </ContentBox>
        </>
      )
    }
  }

  return (
    <Box>
      <>
        {renderContent()}
        {detail && (
          <MemberList
            handleClose={() => setMember(false)}
            members={detail.participants}
            open={member}
          />
        )}
      </>
    </Box>
  )
}

export default PublicMatchDetail
