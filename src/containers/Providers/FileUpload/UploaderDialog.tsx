/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Container,
  Typography,
} from '@mui/material/'
import { UploadOptions } from './types'
import { WarningRounded } from '@mui/icons-material'

interface ConfirmationDialogProps {
  open: boolean
  options: UploadOptions
  onCancel: () => void
  onConfirm: () => void
  onClose: (event: Event, reason: string) => void
}

const UploadDialog = ({
  open,
  options,
  onCancel,
  onConfirm,
  onClose,
}: ConfirmationDialogProps) => {
  const { title, dialogProps } = options

  return (
    <Dialog fullWidth {...dialogProps} open={open} onClose={onClose}>
      <Container maxWidth={false}>
        {title && <DialogTitle>{title}</DialogTitle>}

        <DialogContent>description</DialogContent>

        <DialogActions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Upload</Button>
        </DialogActions>

        <Typography variant="body1" component="p">
          <WarningRounded fontSize="small" />
        </Typography>
      </Container>
    </Dialog>
  )
}

export default UploadDialog
