import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/account'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MemberItem } from '@services/account.services'
import { support as sup } from '@store/support/selectors'
import { SupportState } from '@store/support/reducers'
import { user } from '@store/auth/selectors'
import { UserData } from '@services/auth.services'

const { selectors, actions } = searchStore

const detailMeta = createMetaSelector(actions.profile)

const useProfileDetail = (
  id: string
): {
  meta: Meta
  detail: MemberItem
  support: SupportState
  current: UserData
} => {
  const dispatch = useDispatch()

  const support = useSelector(sup)

  useEffect(() => {
    if (id) dispatch(actions.initProfile(id))
  }, [id])

  const current = useSelector(user)

  const detail = useSelector(selectors.getProfile)
  const meta = useSelector(detailMeta)

  return { meta, detail, support, current }
}

export default useProfileDetail
