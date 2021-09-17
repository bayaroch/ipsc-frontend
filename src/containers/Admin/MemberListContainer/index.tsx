import { useState } from 'react'
import { makeStyles, Box, Button } from '@material-ui/core/'
import useAccount from './useAccount'
import MemberList from '@components/admin/MemberList'
import { useRouter } from 'next/router'
import MemberUpsert from '@components/admin/MemberUpsert'
import { MemberItem, UserCreateParams } from '@services/account.services'
import { PersonAdd } from '@material-ui/icons'

interface UpsertDialog {
  open: boolean
  type: 'create' | 'update'
  data: MemberItem | null
}

const MatchListContainer: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<UpsertDialog | null>(null)
  const { getList, list, paginationMeta, meta } = useAccount()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (_data: UserCreateParams) => {}

  return (
    <Box>
      <Box className={classes.topControl}>
        <Button
          variant="contained"
          color={'primary'}
          size="small"
          onClick={() => {
            setOpen({ type: 'create', open: true, data: null })
          }}
        >
          <PersonAdd style={{ marginRight: 5 }} />
          Нэмэх
        </Button>
      </Box>
      <MemberList
        onEditClick={handleEdit}
        meta={meta}
        list={list}
        getList={getList}
        pagination={paginationMeta}
      />
      <MemberUpsert
        type={open ? open.type : 'create'}
        onSubmit={onSubmit}
        open={open ? open.open : false}
        handleClose={() => setOpen(null)}
      />
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  root: {},
  topControl: {
    paddingBottom: 10,
    justifyContent: 'flex-end',
    display: 'flex',
  },
}))

export default MatchListContainer
