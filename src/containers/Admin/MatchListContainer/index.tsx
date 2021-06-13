import { useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core/'
import useMatch from './useMatch'
import MatchList from '@components/admin/MatchList'

export interface Props {}

const MatchListContainer: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { getList, meta, list } = useMatch()

  console.log(meta, list)

  return <MatchList getList={getList} />
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export default MatchListContainer
