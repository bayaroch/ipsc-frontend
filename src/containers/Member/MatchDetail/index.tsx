import { useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core/'
import { useRouter } from 'next/router'
import useMatchDetail from './useMatchDetail'
import _ from 'lodash'

interface MatchDetailProps {
  id: string
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id }) => {
  const classes = useStyles()
  const { detail, meta, getDetail } = useMatchDetail()

  useEffect(() => {
    console.log('--->', id)
    if (id) {
      getDetail(id)
    }
  }, [id])

  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
      return <>Loading</>
    }
    return null
  }

  const renderContent = () => {
    if (!meta.pending && !meta.error && meta.loaded && detail) {
      return <Box>{detail.name}</Box>
    }
  }

  return (
    <Box>
      {renderLoader()}
      {renderContent()}
    </Box>
  )
}

const useStyles = makeStyles(() => ({}))

export default MatchDetail
