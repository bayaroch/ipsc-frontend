import { useState } from 'react'
import { Box } from '@mui/material/'
import useDivision from './useDivision'
import DivisionList from '@components/admin/DivisionList'
import { DivisionItem, DivisionCreateParams } from '@services/division.services'
import _ from 'lodash'
import DivisionCreate from '@components/admin/DivisionCreate'
import DivisionUpdate from '@components/admin/DivisionUpdate'
import { useConfirm } from 'material-ui-confirm'
import moment from 'moment'
import { commonData, getDivisions } from '@store/support/actions'
import { useDispatch } from 'react-redux'
interface UpsertDialog {
  open: boolean
  data: DivisionItem | null
}

export enum FORM_ACTION_TYPE {
  CREATE = 1,
  UPDATE = 2,
}

const DivisionListContainer: React.FC = () => {
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
  } = useDivision()

  const handleEdit = (data: DivisionItem) => {
    setUpdate({ data: data, open: true })
  }

  const badges = support && support.badges ? support.badges : []

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSubmit = (data: DivisionCreateParams) => {
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

  const onSubmitUpdate = (data: DivisionCreateParams) => {
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
          <DivisionList
            classData={support && support.class ? support.class : []}
            onEditDivision={handleEdit}
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

      <DivisionCreate
        badges={badges}
        submit={onSubmit}
        open={open}
        handleClose={() => setOpen(false)}
      />
      <DivisionUpdate
        badges={badges}
        submit={onSubmitUpdate}
        open={updateOpen !== null ? updateOpen.open : false}
        initData={updateOpen && updateOpen.data}
        handleClose={() => setUpdate(null)}
      />
    </Box>
  )
}

export default DivisionListContainer
