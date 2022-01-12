import { useContext } from 'react'
import ConfirmContext from './UploaderContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useUpload = () => {
  const upload = useContext(ConfirmContext)
  return upload
}

export default useUpload
