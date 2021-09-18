import { useState } from 'react'
import { makeStyles, Box, Button } from '@material-ui/core/'
import useAccount from './useAccount'
import MemberList from '@components/admin/MemberList'
import { MemberItem, UserCreateParams } from '@services/account.services'
import { PersonAdd } from '@material-ui/icons'
import _ from 'lodash'
import MemberCreate from '@components/admin/MemberCreate'
import MemberUpdate from '@components/admin/MemberUpdate'

interface UpsertDialog {
  open: boolean
  data: MemberItem | null
}

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const MatchListContainer: React.FC = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(false)
  const [updateOpen, setUpdate] = useState<UpsertDialog | null>(null)
  const {
    getList,
    list,
    paginationMeta,
    meta,
    create,
    update,
    support,
  } = useAccount()

  const handleEdit = (data: MemberItem) => {
    setUpdate({ data: data, open: true })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: UserCreateParams) => {
    create(data)
    setOpen(false)
  }

  const onSubmitUpdate = (data: UserCreateParams) => {
    if (updateOpen && updateOpen.data && !_.isEqual(updateOpen.data, data))
      if (_.isEmpty(data.password)) {
        update({ data: _.omit(data, 'password'), id: updateOpen?.data.id })
      } else {
        update({ data: data, id: updateOpen?.data.id })
      }

    setUpdate(null)
  }

  return (
    <Box>
      <Box className={classes.topControl}>
        <Button
          variant="contained"
          color={'primary'}
          size="small"
          onClick={() => {
            setOpen(true)
          }}
        >
          <PersonAdd style={{ marginRight: 5 }} />
          Нэмэх
        </Button>
      </Box>
      <MemberList
        classData={support && support.class ? support.class : []}
        onEditMember={handleEdit}
        meta={meta}
        list={list}
        getList={getList}
        pagination={paginationMeta}
      />
      <MemberCreate
        submit={onSubmit}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <MemberUpdate
        submit={onSubmitUpdate}
        open={updateOpen !== null ? updateOpen.open : false}
        initData={updateOpen && updateOpen.data}
        handleClose={() => setUpdate(null)}
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
