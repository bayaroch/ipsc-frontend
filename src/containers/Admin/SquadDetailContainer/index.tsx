import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material/'
import useSquadDetail from './useSquadDetail'
import _, { isArray } from 'lodash'
import SquadListEdit from '@components/admin/SquadList/SquadListEdit'
import { SquadListData, SquadListMembers } from '@services/squad.services'
import { useConfirm } from 'material-ui-confirm'
import SquadCreate from '@components/admin/SquadCreate'
import { SquadCreateInputType } from '@components/admin/SquadCreate/useSquadCreate'
import { Edit, Close } from '@mui/icons-material'
import SquadMemberList from '@components/member/SquadMemberList'
import ListView from '@components/common/List/ListView'
import { SquadGroupType } from '@store/squads/selectors/helpers'

interface SquadDetailContainerProps {
  id: string
}

const SquadDetailContainer: React.FC<SquadDetailContainerProps> = ({ id }) => {
  const confirm = useConfirm()
  const [mode, setMode] = useState<boolean>(false)
  const [memberList, setMemberList] = useState<null | SquadListMembers[]>(null)
  const [selectedData, setSelectedData] = useState<SquadListData | undefined>(
    undefined
  )
  const {
    listGroup,
    listMeta,
    create,
    createMeta,
    update,
    updateMeta,
    deleting,
    match,
  } = useSquadDetail(id)

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
          <Box className="dot-flashing" />
        </Box>
      )
    }
  }

  const onDelete = (id: number) => {
    confirm({
      title: 'Та итгэлтэй байна уу',
      description: 'Энэ скуад усгах гэж байна',
      confirmationText: 'Устгах',
      cancellationText: 'Цуцлах',
    })
      .then(() => {
        deleting(id)
      })
      .catch(() => {
        /* ... */
      })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onExpandMembers = (members: SquadListMembers[]) => {
    !_.isEmpty(members) && setMemberList(members)
  }

  const onSelectChange = (id: number, group: string) => {
    const list = listGroup.find((g) => g.groupTitle === group)?.data

    if (!_.isEmpty(list) && isArray(list)) {
      const data = list.find((obj) => {
        return obj.id === id
      })
      setSelectedData(data)
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
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h3">{_.get(match, 'name', '')}</Typography>
            </Box>
            <Button
              onClick={() => {
                setMode(!mode)
              }}
            >
              {mode ? <Close /> : <Edit />}
              {mode ? 'Цуцлах' : 'Засах'}
            </Button>
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
        <Box>{item.groupTitle}</Box>
        <SquadListEdit
          isEdit={mode}
          selectedId={_.get(selectedData, 'id', undefined)}
          onSelectChange={(id) => onSelectChange(id, item.groupTitle)}
          onDelete={onDelete}
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
      return <Box></Box>
    }
    return null
  }

  const onSubmit = (data: SquadCreateInputType) => {
    if (mode && selectedData) {
      update({ data: { ...data, match_id: Number(id) }, id: selectedData.id })
    } else {
      create({
        ...data,
        match_id: Number(id),
      })
    }
  }

  const renderSquadCreate = () => {
    if (!listMeta.pending && listMeta.loaded && !listMeta.error && match) {
      return (
        <SquadCreate
          matchStart={match.match_start}
          isEdit={mode}
          editData={mode ? selectedData : undefined}
          isDisabled={
            (createMeta.pending && !createMeta.loaded && !createMeta.error) ||
            (updateMeta.pending && !updateMeta.error && !updateMeta.loaded)
          }
          onSubmit={onSubmit}
        />
      )
    }
    return null
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {renderLoader()}
      {renderList()}
      {renderPlaceholder()}
      {renderSquadCreate()}
      <SquadMemberList
        handleClose={() => setMemberList(null)}
        members={memberList !== null ? memberList : []}
        open={!_.isEmpty(memberList)}
      />
    </Box>
  )
}

export default SquadDetailContainer
