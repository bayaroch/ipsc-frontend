import { useState } from 'react'
import { Box, Typography } from '@mui/material/'
import useSquadJoin from './useSquadJoin'
import _ from 'lodash'
import SquadList from '@components/admin/SquadList'
import {
  SquadChangeParams,
  SquadJoinParams,
  SquadListMembers,
} from '@services/squad.services'
import { useConfirm } from 'material-ui-confirm'
import SquadMemberList from '@components/member/SquadMemberList'
import { SquadHelper } from '@store/squads/reducers/helpers'
import ListView from '@components/common/List/ListView'
import { SquadGroupType } from '@store/squads/selectors/helpers'

interface SquadJoinContainerProps {
  id: string
}

const SquadJoinContainer: React.FC<SquadJoinContainerProps> = ({ id }) => {
  const confirm = useConfirm()
  const [mode] = useState<boolean>(true)
  const [memberList, setMemberList] = useState<null | SquadListMembers[]>(null)
  // const [selectedData, setSelectedData] = useState<SquadListData | undefined>(
  //   undefined
  // )
  const { listMeta, join, userData, match, change, listGroup } = useSquadJoin(
    id
  )

  const renderLoader = () => {
    if (listMeta.pending && !listMeta.loaded && !listMeta.error) {
      return (
        <Box
          sx={{
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
          }}
        >
          <Box className="dots-flashing" />
        </Box>
      )
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onExpandMembers = (members: SquadListMembers[]) => {
    !_.isEmpty(members) && setMemberList(members)
  }

  const onSelectChange = (id: number, group: string) => {
    const groupData = listGroup.find((g) => g.groupTitle === group)
    const list = groupData ? groupData.data : []

    // if (!_.isEmpty(list) && isArray(list)) {
    //   const data = list.find((obj) => {
    //     return obj.id === id
    //   })
    //   setSelectedData(data)
    // }

    const existSquad = SquadHelper.isExist(list, userData.id)

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
          // setSelectedData(undefined)
        })
    }
  }

  const renderList = () => {
    if (
      !_.isEmpty(listGroup) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return (
        <Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h2"
              sx={{ textAlign: 'center', padding: '20px 0' }}
            >
              {_.get(match, 'name', '')}
            </Typography>
          </Box>
          <ListView data={listGroup} renderRow={renderRow} />
        </Box>
      )
    }
    return null
  }

  const renderRow = (item: SquadGroupType, index: number) => {
    return (
      <Box key={index}>
        <Typography variant="h3">{item.groupTitle}</Typography>
        <SquadList
          isEdit={mode}
          userId={userData.id}
          onSelectChange={(id) => onSelectChange(id, item.groupTitle)}
          onExpandMembers={onExpandMembers}
          list={item.data}
        />
      </Box>
    )
  }

  const renderPlaceholder = () => {
    if (
      _.isEmpty(listGroup) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return <Box>Энэ тэмцээн дээр ээлж үүсээгүй байна</Box>
    }
    return null
  }

  return (
    <Box sx={{ position: 'relative' }}>
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

export default SquadJoinContainer
