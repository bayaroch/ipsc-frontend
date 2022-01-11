import { useEffect } from 'react'
import { createMetaSelector } from '@store/metadata/selectors'
import searchStore from '@store/account'
import { Meta } from '@store/metadata/actions/types'
import { useDispatch, useSelector } from 'react-redux'
import { MemberItem } from '@services/account.services'

const { selectors, actions } = searchStore

const detailMeta = createMetaSelector(actions.profile)

const useProfileDetail = (
  id: string
): {
  meta: Meta
  detail: MemberItem
} => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.profile(Number(id)))
  }, [])

  const detail = useSelector(selectors.getProfile)
  const meta = useSelector(detailMeta)

  return { meta, detail }
}

export default useProfileDetail
