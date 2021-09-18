import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/account'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import {
  MemberItem,
  MemberPageMeta,
  MemberPaginationMeta,
  UserCreateParams,
  UserUpdateParams,
} from '@services/account.services'

import { support as sup } from '@store/support/selectors'
import { SupportState } from '@store/support/reducers'

const { selectors, actions } = searchStore
const getAllMemberMeta = createMetaSelector(actions.getAllMembers)

const useAccount = (): {
  meta: Meta
  list: MemberItem[]
  getList: (params: MemberPageMeta) => void
  paginationMeta: MemberPaginationMeta
  create: (params: UserCreateParams) => void
  update: (params: UserUpdateParams) => void
  support: SupportState
} => {
  const dispatch = useDispatch()
  const meta = useSelector(getAllMemberMeta)
  const list = useSelector(selectors.members)
  const paginationMeta = useSelector(selectors.paginationMeta)
  const getList = (params: MemberPageMeta) =>
    dispatch(actions.getAllMembers(params))
  const create = (params: UserCreateParams) =>
    dispatch(actions.createUser(params))
  const support = useSelector(sup)

  const update = (params: UserUpdateParams) =>
    dispatch(actions.updateUser(params))

  return {
    meta,
    list,
    getList,
    paginationMeta,
    create,
    update,
    support,
  }
}

export default useAccount
