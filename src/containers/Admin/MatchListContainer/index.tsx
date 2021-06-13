import { useEffect } from 'react'
import { makeStyles, Box, Button } from '@material-ui/core/'
import useMatch from './useMatch'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import MatchList from '@components/admin/MatchList'
import { useRouter } from 'next/router'

export interface Props {}

const MatchListContainer: React.FC<Props> = (props) => {
  const classes = useStyles()
  const { getList, list, paginationMeta } = useMatch()
  const router = useRouter()

  const handleEdit = (id: number) => {
    router.push(`/admin/matches/edit/${id}`)
  }

  return (
    <Box>
      <Box className={classes.topControl}>
        <Button
          variant="contained"
          size="small"
          startIcon={<AddCircleOutlineIcon />}
          color="primary"
        >
          Create New
        </Button>
      </Box>
      <MatchList
        onEditClick={handleEdit}
        list={list}
        getList={getList}
        pagination={paginationMeta}
      />
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {},
  topControl: {
    paddingBottom: 10,
    justifyContent: 'flex-end',
    display: 'flex',
  },
}))

export default MatchListContainer
