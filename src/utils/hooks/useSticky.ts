import { useEffect, useState } from 'react'

const useSticky = (offset: number) => {
  const [isSticky, setSticky] = useState(false)
  const handleScroll = () => {
    if (window.pageYOffset > offset) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
  return isSticky
}

export default useSticky
