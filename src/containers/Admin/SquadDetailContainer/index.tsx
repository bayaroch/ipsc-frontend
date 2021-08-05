import { makeStyles, Box, CircularProgress } from '@material-ui/core/'
import { useRouter } from 'next/router'
import useSquadDetail from './useSquadDetail'
import _ from 'lodash'
import SquadList from '@components/admin/SquadList'
import { SquadListMembers } from '@services/squad.services'
import { useConfirm } from 'material-ui-confirm'

interface SquadDetailContainerProps {
  id: string
}

const SquadDetailContainer: React.FC<SquadDetailContainerProps> = ({ id }) => {
  const classes = useStyles()
  const router = useRouter()
  const confirm = useConfirm()
  const {
    list,
    listMeta,
    create,
    createMeta,
    update,
    updateMeta,
    updateResponse,
    createResponse,
    deleting,
  } = useSquadDetail(id)

  console.log(id)

  const renderLoader = () => {
    if (listMeta.pending && !listMeta.loaded && !listMeta.error) {
      return (
        <Box className={classes.loaderBox}>
          <CircularProgress className={classes.loader} />
        </Box>
      )
    }
  }

  const onDelete = (id: string) => {
    confirm({
      title: 'Та итгэлтэй байна уу',
      description: 'Энэ ээлжийг усгах гэж байна',
      confirmationText: 'Устгах',
      cancellationText: 'Цуцлах',
    })
      .then(() => {
        console.log('deleting')
        deleting(id)
      })
      .catch(() => {
        /* ... */
      })
  }

  const onExpandMembers = (members: SquadListMembers[]) => {}

  const renderList = () => {
    if (
      !_.isEmpty(list) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return (
        <Box>
          <SquadList
            onDelete={onDelete}
            onExpandMembers={onExpandMembers}
            list={list}
          />
        </Box>
      )
    }
    return null
  }

  const renderPlaceholder = () => {
    if (
      _.isEmpty(list) &&
      !listMeta.pending &&
      listMeta.loaded &&
      !listMeta.error
    ) {
      return <Box>Empty</Box>
    }
    return null
  }

  return (
    <Box className={classes.container}>
      {renderLoader()}
      {renderList()}
      {renderPlaceholder()}
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  group: {
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: 20,
  },
  loader: {},
  loaderBox: {
    background: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default SquadDetailContainer
