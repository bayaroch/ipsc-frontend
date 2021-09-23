import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { MemberItem } from '@services/account.services'
import CustomAvatar from '@components/common/Avatar'
import _ from 'lodash'
import { helper } from '@utils/helpers/common.helper'
import { SupportState } from '@store/support/reducers'

interface MemberCardProps {
  item: MemberItem
  onClick?: (data: MemberItem) => void
  support: SupportState
}

const MemberCard: React.FC<MemberCardProps> = ({ item, onClick, support }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.agentItemsRoot}
      onClick={() => onClick && onClick(item)}
    >
      <Box className={classes.cardRoot}>
        <Box className={classes.avatarView}>
          <CustomAvatar
            className={classes.avatar}
            src={_.get(item, 'img_url', undefined)}
            alt={_.get(item, 'firstname', '')}
          />
        </Box>
        <Typography component="div" variant="h5" className={classes.titleRoot}>
          {_.get(item, 'firstname', '')}.{_.get(item, 'lastname', '')}{' '}
          <span className={classes.code}>#{_.get(item, 'usercode', '')}</span>
        </Typography>
        <Box display="flex" alignItems="center">
          {item.class_id !== 1 ? (
            <StarRateIcon className={classes.starIcon} />
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
            {_.get(
              helper.categoryTitleHelper(item.birthday, item.gender),
              'name',
              ''
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  agentItemsRoot: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  code: {
    fontSize: 11,
    color: '#999',
  },
  cardRoot: {
    width: '100%',
    margin: 2,
    marginTop: 28,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    borderRadius: 6,
    padding: '34px 16px 20px 16px',
    position: 'relative',
  },
  titleRoot: {
    color: theme.palette.common.black,
    letterSpacing: 0.25,
    marginBottom: 6,
    fontSize: 13,
  },
  starIcon: {
    color: theme.palette.warning.main,
    fontSize: 20,
    marginRight: 3,
  },
  avatarView: {
    position: 'absolute',
    left: 16,
    top: -28,
    zIndex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    border: `solid 1px ${theme.palette.grey[400]}`,
  },
}))

export default MemberCard
