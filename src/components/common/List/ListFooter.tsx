import React from 'react'
import clsx from 'clsx'
import { CircularProgress, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  listFooterRoot: {
    padding: 10,
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
  },
  listFooterLoaderRoot: {
    width: '100%',
    display: 'flex',
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    padding: 8,
    borderTop: `1px solid #eee`,
    boxSizing: 'border-box',
  },
}))

interface ListFooterProps {
  loading: boolean
  footerText: string
}

const ListFooter: React.FC<ListFooterProps> = ({ loading, footerText }) => {
  const classes = useStyles()

  return loading ? (
    <div className={classes.listFooterLoaderRoot}>
      <CircularProgress size={16} />
      <span className="ml-2">Уншиж байна...</span>
    </div>
  ) : (
    <div className={clsx(classes.listFooterRoot, 'Cmt-list-footer')}>
      <p>{footerText}</p>
    </div>
  )
}

export default ListFooter
