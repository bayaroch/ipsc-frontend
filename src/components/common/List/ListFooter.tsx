import React from 'react'
import { CircularProgress, Box } from '@mui/material/'

interface ListFooterProps {
  loading: boolean
  footerText: string
}

const ListFooter: React.FC<ListFooterProps> = ({ loading, footerText }) => {
  return loading ? (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        color: 'text.secondary',
        justifyContent: 'center',
        padding: 8,
        borderTop: `1px solid #eee`,
        boxSizing: 'border-box',
      }}
    >
      <CircularProgress size={16} />
      <span className="ml-2">Уншиж байна...</span>
    </Box>
  ) : (
    <Box
      sx={{
        padding: 10,
        color: 'text.secondary',
        display: 'flex',
        justifyContent: 'center',
      }}
      className={'Cmt-list-footer'}
    >
      <p>{footerText}</p>
    </Box>
  )
}

export default ListFooter
