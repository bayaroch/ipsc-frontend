import React from 'react'
import { Typography, Card, CardContent } from '@mui/material/'
import { MatchItem } from '@store/match/actions/types'
import { helper, MatchProgressType } from '@utils/helpers/common.helper'
import StatusChip from '@components/member/StatusChip'
import { InfoItem } from '../ProfileDetailContainer/Elements/OtherInfo'
import { AccountTree, LocalAtm, LocalPolice, Update } from '@mui/icons-material'

interface About {
  detail: MatchItem
  progress: MatchProgressType
}

const About: React.FC<About> = ({ detail, progress }) => {
  return (
    <Card
      sx={{
        '& .Cmt-header-root': {
          paddingTop: 3,
          paddingBottom: 0,
        },
      }}
    >
      <CardContent>
        <InfoItem
          title={'Төлөв'}
          value={<StatusChip status={progress} label={progress.value} />}
          icon={<Update />}
        />
        <InfoItem
          title="Түвшин"
          icon={<LocalPolice />}
          value={
            <Typography sx={{ fontWeight: 500, fontSize: 16 }} variant="body2">
              Level {detail.lvl}
            </Typography>
          }
        />

        <InfoItem
          title="Хураамж"
          icon={<LocalAtm />}
          value={
            <Typography sx={{ fontWeight: 500, fontSize: 16 }} variant="body2">
              {detail.tax === 0 ? 'FREE' : helper.currency(detail.tax)}
            </Typography>
          }
        />

        <InfoItem
          title={' Стэйжийн тоо'}
          value={
            <Typography sx={{ fontWeight: 500, fontSize: 16 }} variant="body2">
              {detail.stage_number}
            </Typography>
          }
          icon={<AccountTree />}
        />
      </CardContent>
    </Card>
  )
}

export default About
