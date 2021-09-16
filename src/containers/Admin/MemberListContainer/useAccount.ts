import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/account'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  MemberItem,
  MemberPageMeta,
  MemberPaginationMeta,
} from '@services/account.services'

const { selectors, actions } = searchStore
const getAllMemberMeta = createMetaSelector(actions.getAllMembers)

const useAccount = (): {
  meta: Meta
  list: MemberItem[]
  getList: (params: MemberPageMeta) => void
  paginationMeta: MemberPaginationMeta
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllMemberMeta)
  const list = useSelector(selectors.members)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: MemberPageMeta) =>
    dispatch(actions.getAllMembers(params))

  return { meta, list, getList, paginationMeta }
}

export default useAccount
