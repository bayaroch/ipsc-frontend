import { useContext } from 'react'
import ConfirmContext from './UploaderContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useImport = () => {
  const importMatch = useContext(ConfirmContext)
  return importMatch
}

export default useImport
