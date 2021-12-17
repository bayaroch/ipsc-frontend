import React from 'react'

import { Box, Button, CircularProgress } from '@mui/material/'
import { alpha } from '@mui/material/styles'

export interface ListEmptyResultProps {
  loader: any
  placeholder: string
  loading: boolean
  title: string
  actionTitle: string
  content: any
  onClick: () => void
  children: any
}

const ListEmptyResult: React.FC<ListEmptyResultProps> = ({
  loader,
  placeholder,
  loading,
  title,
  actionTitle,
  content,
  onClick,
  children,
}) => {
  if (loading || loader) {
    return (
      <React.Fragment>
        {placeholder ? (
          placeholder
        ) : (
          <Box
            sx={{
              minHeight: 250,
              height: '100%',
              display: 'flex',
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: (theme) => theme.palette.background.paper,
              border: `1px solid ${alpha('#000', 0.12)}`,
              borderRadius: '4px',
              textAlign: 'center',
              flexDirection: 'row',
            }}
            className={'CmtList-EmptyResult'}
          >
            <CircularProgress size={16} />
            <span className="ml-2">Loading...</span>
          </Box>
        )}
      </React.Fragment>
    )
  } else {
    return (
      <Box
        className={'CmtList-EmptyResult'}
        sx={{
          flexDirection: 'column',
          minHeight: 250,
          height: '100%',
          display: 'flex',
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: (theme) => theme.palette.background.paper,
          border: `1px solid ${alpha('#000', 0.12)}`,
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        {children ? (
          children
        ) : (
          <React.Fragment>
            {title && (
              <Box component="h4" fontSize={28} color="text.primary" mb={3}>
                {title}
              </Box>
            )}
            <Box fontSize={18} component="p" color="text.secondary">
              {content}
            </Box>

            {actionTitle && (
              <Button
                color="primary"
                variant="contained"
                style={{ marginTop: 30, height: 45, minWidth: 150 }}
                onClick={onClick}
              >
                {actionTitle}
              </Button>
            )}
          </React.Fragment>
        )}
      </Box>
    )
  }
}

export default ListEmptyResult
