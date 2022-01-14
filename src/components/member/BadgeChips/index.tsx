import React from 'react'
import { Box, Chip, Divider, Stack, StackProps } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import _ from 'lodash'
import CustomList from '@components/common/List'
import { SupportItem } from '@services/support.services'
import { styled } from '@mui/material/styles'
import { badgeColor } from '@constants/user.constants'

const Item = styled(Chip)(() => ({
  textAlign: 'center',
  color: '#fff',
  fontSize: 11,
  padding: '3px 6px',
  height: 'auto',
}))

interface BadgeChipsProps {
  data: MemberItem
  badgesData: SupportItem[]
  stackProps?: StackProps
}

const BadgeChips: React.FC<BadgeChipsProps> = ({
  data,
  badgesData,
  stackProps,
}) => {
  const { mo_badge } = data
  const badge = mo_badge ? mo_badge.split(',') : []

  const renderRow = (item: string) => {
    const { shorthand } = _.filter(badgesData, { id: Number(item) })[0]
    return (
      <Item
        key={item}
        label={shorthand}
        sx={{
          backgroundColor: badgeColor[Number(item)]
            ? badgeColor[Number(item)]
            : '#eee',
        }}
      />
    )
  }

  return (
    <Box>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        {...stackProps}
      >
        <CustomList data={badge} renderRow={renderRow} />
      </Stack>
    </Box>
  )
}

export default BadgeChips
