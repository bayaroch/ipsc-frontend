/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Container,
  Box,
  Alert,
  Typography,
} from '@mui/material/'
import { UploadOptions } from './types'
import { useDropzone, FileWithPath } from 'react-dropzone'
import HtmlIcon from '@mui/icons-material/Html'
import { LoadingButton } from '@mui/lab'
import { matchServices } from '@services/match.services'
import CustomInput from '@components/common/Input'
import { Attachment } from '@mui/icons-material'

interface UploadDialogProps {
  open: boolean
  options: UploadOptions
  onCancel: () => void
  onConfirm: () => void
  onClose: (event: Event, reason: string) => void
}

const ImportDialog = ({
  options,
  onCancel,
  onConfirm,
  onClose,
  ...rest
}: UploadDialogProps) => {
  const dialogOpen = rest.open
  const { title, dialogProps, id } = options
  const [file, setFile] = useState<FileWithPath | null>(null)
  const [zip, setZip] = useState<FileWithPath | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [exclude_codes, setCodes] = useState<string>('')
  const [rts, setRTS] = useState<string>('')

  useEffect(() => {
    if (dialogOpen) {
      setZip(null)
      setFile(null)
      setRTS('')
      setError(null)
      setCodes('')
    }
  }, [dialogOpen])

  const handleImport = async () => {
    // if (file && zip) {
    if (file) {
      setLoading(true)
      try {
        setError(null)
        if (id) {
          await matchServices.importMatch({
            match_html: file,
            rts: rts,
            match_id: id,
            exclude_codes: exclude_codes,
            add_zip: zip,
          })
        } else {
          await matchServices.importMatch({
            match_html: file,
            rts: rts,
            exclude_codes: exclude_codes,
            add_zip: zip,
          })
        }
        onConfirm()
      } catch (err) {
        setError('Алдаа гарлааа дахин оролдоно уу')
      }
      setLoading(false)
    }
  }

  const onChangeCodes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodes(e.target.value)
  }

  const onChangeRTS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRTS(e.target.value)
  }

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'text/html',
    maxFiles: 1,
    maxSize: 2000000,
    onDrop: (acceptedFiles) => {
      const singleFile = acceptedFiles[0]
      setFile(singleFile)
    },
  })

  const {
    getRootProps: getZipProps,
    getInputProps: getZipInputProps,
    open: zipOpen,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'application/zip, application/x-zip-compressed, multipart/x-zip',
    maxFiles: 1,
    maxSize: 20000000,
    onDrop: (acceptedFiles) => {
      const singleFile = acceptedFiles[0]
      setZip(singleFile)
    },
  })

  const thumbs = () => {
    return (
      file && (
        <Box sx={{ textAlign: 'center' }}>
          <HtmlIcon />
          <Typography sx={{ fontSize: 14 }}>{file.name}</Typography>
        </Box>
      )
    )
  }

  const renderZipInfo = () => {
    return (
      zip && (
        <Box sx={{ textAlign: 'center' }}>
          <Attachment />
          <Typography sx={{ fontSize: 14 }}>{zip.name}</Typography>
        </Box>
      )
    )
  }

  // eslint-disable-next-line no-console
  console.log(zip)
  return (
    <Dialog
      fullWidth
      {...dialogProps}
      open={dialogOpen}
      onClose={(e: any, r) => {
        onClose(e, r)
        setError(null)
        setFile(null)
      }}
    >
      <Container maxWidth={false}>
        {title && (
          <DialogTitle sx={{ padding: 0, mt: 2, mb: 2, textAlign: 'center' }}>
            {title}
          </DialogTitle>
        )}
        <DialogContent sx={{ padding: 0 }}>
          {id ? (
            <Typography>Тэмцээны ID:{id}</Typography>
          ) : (
            <Typography>Үүсээгүй тэмцээний оноо оруулах гэж байна</Typography>
          )}
          <Box
            display="flex"
            mb={1}
            mt={1}
            sx={{ height: 'auto', width: '100%' }}
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
            <input {...getZipInputProps()} />
            <p>
              Чирэх эсвэл сонгож онооны файлаа оруулна уу. HTML файл байх
              шаардлагатай
            </p>
            <Button variant="outlined" color={'success'} onClick={open}>
              Сонгох
            </Button>
          </Box>
          <Box sx={{ mt: 1 }}>
            <CustomInput
              labelPrimary="Exclude Codes (optional)"
              value={exclude_codes}
              placeholder="Exclude Codes"
              onChange={onChangeCodes}
              type="text"
            />
          </Box>
          <Box sx={{ mt: 1 }}>
            <CustomInput
              labelPrimary="RTS"
              value={rts}
              placeholder="RTS"
              onChange={onChangeRTS}
              type="number"
            />
          </Box>
          {/* zip area */}
          <Box
            display="flex"
            mb={1}
            mt={1}
            sx={{ height: 'auto', width: '100%' }}
            alignItems="center"
            justifyContent="center"
          >
            {renderZipInfo()}
          </Box>
          <Box
            {...getZipProps({ className: 'dropzone-zip' })}
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
            <p>
              Чирэх эсвэл сонгож онооны файлаа оруулна уу. Zip файл байх
              шаардлагатай
            </p>
            <Button variant="outlined" color={'success'} onClick={zipOpen}>
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
          <LoadingButton
            loading={loading}
            disabled={loading}
            variant="contained"
            sx={{ minWidth: 100 }}
            onClick={handleImport}
          >
            Импорт
          </LoadingButton>
        </DialogActions>
      </Container>
    </Dialog>
  )
}

export default ImportDialog
