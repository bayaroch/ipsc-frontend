import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBadges, getClass, getDivisions } from '@store/support/actions'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useCommonData = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBadges())
    dispatch(getClass())
    dispatch(getDivisions())
  }, [])
}

export default useCommonData
