import AdminLayout from '@components/layout/AdminLayout'
import PageWithLayoutType from '@constants/page'
import { makeStyles } from '@material-ui/core/'
import MatchList from '@components/admin/MatchList'

const Matches: PageWithLayoutType = () => {
  const classes = useStyles()
  return (
    <AdminLayout title="Matches">
      <MatchList />
    </AdminLayout>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export default Matches
