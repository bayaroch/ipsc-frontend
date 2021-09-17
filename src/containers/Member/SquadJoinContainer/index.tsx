import { useState } from 'react'
import {
  makeStyles,
  Box,
  CircularProgress,
  Typography,
} from '@material-ui/core/'
import useSquadJoin from './useSquadJoin'
import _, { isArray } from 'lodash'
import SquadList from '@components/admin/SquadList'
import {
  SquadChangeParams,
  SquadJoinParams,
  SquadListData,
  SquadListMembers,
} from '@services/squad.services'
import { useConfirm } from 'material-ui-confirm'
import SquadMemberList from '@components/member/SquadMemberList'
import { SquadHelper } from '@store/squads/reducers/helpers'

interface SquadJoinContainerProps {
  id: string
}

const SquadJoinContainer: React.FC<SquadJoinContainerProps> = ({ id }) => {
  const classes = useStyles()
  const confirm = useConfirm()
  const [mode] = useState<boolean>(true)
  const [memberList, setMemberList] = useState<null | SquadListMembers[]>(null)
  const [selectedData, setSelectedData] = useState<SquadListData | undefined>(
    undefined
  )
  const { list, listMeta, join, userData, match, change } = useSquadJoin(id)

  const renderLoader = () => {
    if (listMeta.pending && !listMeta.loaded && !listMeta.error) {
      return (
        <Box className={classes.loaderBox}>
          <CircularProgress className={classes.loader} />
        </Box>
      )
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onExpandMembers = (members: SquadListMembers[]) => {
    !_.isEmpty(members) && setMemberList(members)
  }

  const existSquad = SquadHelper.isExist(list, userData.id)

  const onSelectChange = (id: number) => {
    if (!_.isEmpty(list) && isArray(list)) {
      const data = list.find((obj) => {
        return obj.id === id
      })
      setSelectedData(data)
    }
    const existInThis = SquadHelper.isExistInThis(list, userData.id, id)

    if (!existInThis) {
      confirm({
        title: 'Ээлж сонголт',
        description: existSquad
          ? 'Та ээлжээ өөрчлөх гэж байна.'
          : 'Та шинээр ээлж сонгож байна',
        confirmationText: 'Тийм',
        cancellationText: 'Үгүй',
      })
        .then(() => {
          if (existSquad) {
            const params: SquadChangeParams = {
              data: {
                squad_id: id,
                user_id: userData.id,
                is_rm: false,
                is_ro: false,
                notify_squad_id: null,
              },
              id: existSquad,
            }
            change(params)
          } else {
            const params: SquadJoinParams = {
              squad_id: id,
              user_id: userData.id,
              is_rm: false,
              is_ro: false,
              notify_squad_id: null,
            }
            join(params)
          }
        })
        .catch(() => {
          setSelectedData(undefined)
        })
    }
  }

  const renderList = () => {
    if (
      !_.isEmpty(list) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return (
        <Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" className={classes.title}>
              {_.get(match, 'name', '')}
            </Typography>
          </Box>
          <SquadList
            isEdit={mode}
            selectedId={_.get(selectedData, 'id', undefined)}
            onSelectChange={onSelectChange}
            onExpandMembers={onExpandMembers}
            list={list}
          />
        </Box>
      )
    }
    return null
  }

  const renderPlaceholder = () => {
    if (
      _.isEmpty(list) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return <Box>Empty</Box>
    }
    return null
  }

  return (
    <Box className={classes.container}>
      {renderLoader()}
      {renderList()}
      {renderPlaceholder()}
      <SquadMemberList
        handleClose={() => setMemberList(null)}
        members={memberList !== null ? memberList : []}
        open={!_.isEmpty(memberList)}
      />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  group: {
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: 24,
  },
  loader: {},
  title: {
    paddingLeft: 20,
  },
  loaderBox: {
    background: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default SquadJoinContainer
