import { useDispatch } from 'react-redux'
import * as commonActions from '@store/support/actions'
import { toastParams } from '@store/support/actions'

const useToast = (): { addToast: (v: toastParams) => void } => {
  const dispatch = useDispatch()
  const addToast = (value: toastParams) =>
    dispatch(commonActions.addToast(value))
  return { addToast }
}

export default useToast
