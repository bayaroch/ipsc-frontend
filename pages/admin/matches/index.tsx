import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { makeStyles } from '@material-ui/core/'
import MatchListContainer from '@containers/Admin/MatchListContainer'

const Matches: PageWithLayoutType = () => {
  const classes = useStyles()
  return (
    <AdminLayout title="Matches">
      <MatchListContainer />
    </AdminLayout>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export default Matches
