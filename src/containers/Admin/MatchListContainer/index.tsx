import { Box } from '@mui/material/'
import useMatch from './useMatch'
import MatchList from '@components/admin/MatchList'
import { useRouter } from 'next/router'
import { useConfirm } from 'material-ui-confirm'
import { useImport } from '@containers/Providers/ImportMatch'
import useToast from '@utils/hooks/useToast'

const MatchListContainer: React.FC = () => {
  const { getList, groupedList, paginationMeta, meta, deleteMatch } = useMatch()
  const router = useRouter()
  const confirm = useConfirm()
  const matchImport = useImport()
  const { addToast } = useToast()

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

  const onImport = (id: number) => {
    if (id) {
      matchImport({ id: id })
        .then(() => {
          addToast({ message: 'Оноо амжилттай импорт хийгдлээ' })
        })
        .catch(() => null)
    }
  }

  const onConfirm = (id: number) => {
    router.push(`/admin/participants/confirm/${id}`)
  }

  return (
    <Box>
      <Box
        sx={{ paddingBottom: 10, justifyContent: 'flex-end', display: 'flex' }}
      ></Box>
      <MatchList
        onEditClick={handleEdit}
        onEditSquad={handleEditSquad}
        onConfirm={onConfirm}
        onImport={onImport}
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
