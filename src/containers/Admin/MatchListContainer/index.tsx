import { Box } from '@mui/material/'
import useMatch from './useMatch'
import MatchList from '@components/admin/MatchList'
import { useRouter } from 'next/router'
import { useConfirm } from 'material-ui-confirm'

const MatchListContainer: React.FC = () => {
  const { getList, groupedList, paginationMeta, meta, deleteMatch } = useMatch()
  const router = useRouter()
  const confirm = useConfirm()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  const handleEditSquad = (id: number) => {
    router.push(`/admin/squad/edit/${id}`)
  }

  const onDelete = (id: number) => {
    confirm({
      title: 'Устгах үйлдэл',
      description: 'Та итгэлтэй байна уу',
      confirmationText: 'Тийм',
      cancellationText: 'Үгүй',
    })
      .then(() => {
        deleteMatch(id)
      })
      .catch(() => null)
  }
  return (
    <Box>
      <Box
        sx={{ paddingBottom: 10, justifyContent: 'flex-end', display: 'flex' }}
      ></Box>
      <MatchList
        onEditClick={handleEdit}
        onEditSquad={handleEditSquad}
        meta={meta}
        list={groupedList}
        onDelete={onDelete}
        getList={getList}
        pagination={paginationMeta}
      />
    </Box>
  )
}

export default MatchListContainer
