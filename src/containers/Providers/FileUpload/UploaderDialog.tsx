/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Container,
  Box,
  CircularProgress,
  Alert,
} from '@mui/material/'
import { UploadOptions } from './types'
import { useDropzone } from 'react-dropzone'
import { image } from '@utils/helpers/image.helper'
import { useS3Upload } from 'next-s3-upload'
import { Colors } from '@theme/colors'

interface UploadDialogProps {
  open: boolean
  options: UploadOptions
  onCancel: () => void
  onConfirm: (url: string) => void
  onClose: (event: Event, reason: string) => void
}

interface ExtendedFile extends File {
  preview: string
}

const UploadDialog = ({
  options,
  onCancel,
  onConfirm,
  onClose,
  ...rest
}: UploadDialogProps) => {
  const dialogOpen = rest.open
  const { title, dialogProps } = options
  const [file, setFile] = useState<ExtendedFile>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const cloudfront = process.env.NEXT_PUBLIC_CLOUD_FRONT_URL

  const { uploadToS3 } = useS3Upload()

  const handleResize = async (file: File) => {
    setError(null)
    try {
      const resized: File = await image.resizeFile(file)
      setFile(
        Object.assign(resized, {
          preview: URL.createObjectURL(resized),
        })
      )
    } catch (err) {
      setError('Зураг шахах үед алдаа гарлаа')
    }
  }

  const handleUpload = async () => {
    if (file) {
      setLoading(true)
      try {
        const { url, key } = await uploadToS3(file)
        let absoluteUrl
        if (cloudfront) {
          absoluteUrl = `${cloudfront}${key}`
        } else {
          absoluteUrl = url
        }
        onConfirm(absoluteUrl)
      } catch (err) {
        // eslint-disable-next-line no-console
        setError('Зураг сервер лүү хуулж чадсангүй')
      }
      setLoading(false)
    }
  }

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'image/jpg, image/png',
    maxFiles: 1,
    maxSize: 2000000,
    onDrop: (acceptedFiles) => {
      const singleFile = acceptedFiles[0]
      handleResize(singleFile)
    },
  })

  const thumbs = () => {
    return (
      <Box
        sx={{
          display: 'inline-flex',
          borderRadius: 1,
          border: '1px solid #eaeaea',
          marginBottom: 1,
          marginRight: 1,
          width: 100,
          height: 100,
          padding: 0.5,
          boxSizing: 'border-box',
        }}
      >
        <Box sx={{ display: 'flex', minWidth: 0, overflow: 'hidden' }}>
          {file && (
            <img
              src={file.preview}
              style={{
                display: 'block',
                width: 'auto',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </Box>
      </Box>
    )
  }

  return (
    <Dialog
      fullWidth
      {...dialogProps}
      open={dialogOpen}
      onClose={(e: any, r) => {
        onClose(e, r)
        setError(null)
      }}
    >
      <Container maxWidth={false}>
        {title && (
          <DialogTitle sx={{ padding: 0, mt: 2, mb: 2, textAlign: 'center' }}>
            {title}
          </DialogTitle>
        )}
        <DialogContent sx={{ padding: 0 }}>
          <Box
            display="flex"
            mb={1}
            mt={1}
            sx={{ height: 100, width: '100%' }}
            alignItems="center"
            justifyContent="center"
          >
            {thumbs()}
          </Box>
          <Box
            {...getRootProps({ className: 'dropzone' })}
            sx={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              borderWidth: '2px',
              borderRadius: '2px',
              borderColor: '#eeeeee',
              borderStyle: 'dashed',
              backgroundColor: '#fafafa',
              color: '#bdbdbd',
              outline: 'none',
              transition: 'border .24s ease-in-out',
            }}
          >
            <input {...getInputProps()} />
            <p>Чирэх эсвэл дарж зургаа сонгоно уу</p>
            <Button variant="outlined" color={'success'} onClick={open}>
              Сонгох
            </Button>
          </Box>
          {error && (
            <Box mt={1}>
              <Alert severity="warning">Алдаа гарлаа - {error}</Alert>
            </Box>
          )}
        </DialogContent>
        <DialogActions
          sx={{ pt: 2, pb: 2, pl: 0, pr: 0, justifyContent: 'space-between' }}
        >
          <Button variant="outlined" onClick={onCancel}>
            Цуцлах
          </Button>
          <Button
            variant="contained"
            sx={{ minWidth: 100 }}
            onClick={handleUpload}
            disabled={loading}
          >
            <Box
              sx={{
                height: 22,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {loading ? (
                <CircularProgress
                  style={{
                    height: 14,
                    width: 14,
                    color: Colors.white,
                  }}
                />
              ) : (
                ' Хуулах'
              )}
            </Box>
          </Button>
        </DialogActions>
      </Container>
    </Dialog>
  )
}

export default UploadDialog
