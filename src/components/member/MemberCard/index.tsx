import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate'
import { Box, Typography } from '@mui/material/'
import { MemberItem } from '@services/account.services'
import CustomAvatar from '@components/common/Avatar'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'
import { SupportState } from '@store/support/reducers'
import BadgeChips from '../BadgeChips'

interface MemberCardProps {
  item: MemberItem
  onClick?: (data: MemberItem) => void
  support: SupportState
}

const MemberCard: React.FC<MemberCardProps> = ({ item, onClick, support }) => {
  return (
    <Box
      sx={{ paddingLeft: '10px', paddingRight: '10px' }}
      onClick={() => onClick && onClick(item)}
    >
      <Box
        sx={{
          width: '100%',
          margin: 1,
          marginTop: 3,
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
          borderRadius: 1,
          padding: '34px 16px 10px 16px',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', left: 16, top: -28, zIndex: 1 }}>
          <CustomAvatar
            sx={{
              width: 56,
              height: 56,
              border: `solid 1px ${(theme: any) => theme.palette.grey[400]}`,
            }}
            src={_.get(item, 'img_url', undefined)}
            alt={_.get(item, 'firstname', '')}
          />
        </Box>
        <Typography
          component="div"
          variant="h5"
          sx={{
            color: 'common.black',
            letterSpacing: 0.25,
            marginBottom: '6px',
            fontSize: 13,
          }}
        >
          {_.get(item, 'firstname', '')}.{_.get(item, 'lastname', '')}{' '}
          <Box component="span" sx={{ fontSize: 11, color: '#999' }}>
            #{_.get(item, 'usercode', '')}
          </Box>
        </Typography>
        <Box display="flex" alignItems="center">
          {item.class_id !== 1 ? (
            <StarRateIcon
              sx={{
                color: 'warning.main',
                fontSize: 20,
                marginRight: '3px',
              }}
            />
          ) : null}
          <Box component="p" color="text.secondary" fontSize={12}>
            {_.get(
              helper.classTitleHelper(
                item.class_id,
                _.get(support, 'class', [])
              ),
              'name',
              ''
            )}
            {' | '}
            {helper
              .categoryTitleHelper(item.birthday, item.gender)
              .map((c, index) => {
                return `${index === 1 ? ' | ' : ''}${c.name}`
              })}
          </Box>
        </Box>
        <Box mt={1} height={20}>
          <BadgeChips
            data={item}
            size="small"
            badgesData={support && support.badges ? support.badges : []}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default MemberCard
