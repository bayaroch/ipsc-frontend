import { makeStyles, Box } from '@material-ui/core/'
import { useRouter } from 'next/router'

interface MatchDetailProps {
  id: string
}

const MatchDetail: React.FC<MatchDetailProps> = ({ id }) => {
  const classes = useStyles()
  const router = useRouter()

  return <Box>{id}</Box>
}

const useStyles = makeStyles(() => ({}))

export default MatchDetail
