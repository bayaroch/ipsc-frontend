import { useState } from 'react'
import { Box } from '@mui/material/'
import useMatchType from './useMatchType'
import MatchTypeList from '@components/admin/MatchTypeList'
import { MatchTypeItem, MatchTypeCreateParams } from '@services/match-type.services'
import _ from 'lodash'
import MatchTypeCreate from '@components/admin/MatchTypeCreate'
import MatchTypeUpdate from '@components/admin/MatchTypeUpdate'
import { useConfirm } from 'material-ui-confirm'
import { commonData } from '@store/support/actions'
import { useDispatch } from 'react-redux'
interface UpsertDialog {
  open: boolean
  data: MatchTypeItem | null
}

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const MatchTypeListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [updateOpen, setUpdate] = useState<UpsertDialog | null>(null)
  const confirm = useConfirm()
  const {
    getList,
    list,
    paginationMeta,
    meta,
    create,
    update,
    support,
  } = useMatchType()

  const handleEdit = (data: MatchTypeItem) => {
    setUpdate({ data: data, open: true })
  }

  const badges = support && support.badges ? support.badges : []

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: MatchTypeCreateParams) => {
    confirm({
      title: 'Шинээр division үүсгэх гэж байна',
      description: 'Мэдээлэл зөв эсэхийг нягтална уу',
      confirmationText: 'Тийм',
      cancellationText: 'Үгүй',
    })
      .then(() => {
        create(data)
        setOpen(false)
        dispatch(commonData())
      })
      .catch(() => {
        setOpen(false)
      })
  }

  const onSubmitUpdate = (data: MatchTypeCreateParams) => {
    confirm({
      title: 'Мэдээлэл шинэчлэх үү',
      description: `Division-ны мэдээлэл өөрчлөх гэж байна`,
      confirmationText: 'Тийм',
      cancellationText: 'Үгүй',
    })
      .then(() => {
        if (updateOpen && updateOpen.data)
          update({
            data: data,
            id: updateOpen?.data.id,
          })
        setUpdate(null)
        dispatch(commonData())
      })
      .catch(() => null)
  }

  return (
    <Box>
      {list ? (
        <>
          <MatchTypeList
            classData={support && support.class ? support.class : []}
            onEditMatchType={handleEdit}
            meta={meta}
            badgeData={badges}
            list={list}
            onAdd={() => setOpen(true)}
            getList={getList}
            pagination={paginationMeta}
          />
        </>
      ) : (
        ''
      )}

      <MatchTypeCreate
        badges={badges}
        submit={onSubmit}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <MatchTypeUpdate
        badges={badges}
        submit={onSubmitUpdate}
        open={updateOpen !== null ? updateOpen.open : false}
        initData={updateOpen && updateOpen.data}
        handleClose={() => setUpdate(null)}
      />
    </Box>
  )
}

export default MatchTypeListContainer
