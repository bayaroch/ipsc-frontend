import { useSelector, useDispatch } from 'react-redux'
import { getPage } from '@store/support/selectors'
import { fetchWordpress } from '@store/support/actions'

export interface returnType {
  data: any
  fetchPage: (id: string) => void
}

const useWordpress = (): returnType => {
  const data = useSelector(getPage)
  const dispatch = useDispatch()
  const fetchPage = (id: string) => {
    dispatch(fetchWordpress(id))
  }

  return { data, fetchPage }
}

export default useWordpress
