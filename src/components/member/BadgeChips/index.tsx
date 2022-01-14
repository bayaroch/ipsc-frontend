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

  height: 'auto',
  fontWeight: 600,
}))

interface BadgeChipsProps {
  data: MemberItem
  badgesData: SupportItem[]
  stackProps?: StackProps
  size?: 'small' | 'normal'
}

const BadgeChips: React.FC<BadgeChipsProps> = ({
  data,
  badgesData,
  stackProps,
  size,
}) => {
  const { mo_badge } = data
  const badge = mo_badge ? mo_badge.split(',') : []

  const renderRow = (item: string) => {
    const shorthand = _.get(
      _.filter(badgesData, { id: Number(item) })[0],
      'shorthand',
      ''
    )
    return (
      <Item
        key={item}
        label={shorthand}
        sx={{
          backgroundColor: badgeColor[Number(item)]
            ? badgeColor[Number(item)]
            : '#eee',

          padding: size === 'normal' ? '3px 6px' : '2px 0px',
          fontSize: size === 'normal' ? 11 : 9,
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

BadgeChips.defaultProps = {
  size: 'normal',
}

export default BadgeChips
