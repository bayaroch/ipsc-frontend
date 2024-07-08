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
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

interface UploadDialogProps {
  open: boolean
  options: UploadOptions
  onCancel: () => void
  onConfirm: () => void
  onClose: (event: Event, reason: string) => void
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
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
  const [xls, setXls] = useState<FileWithPath | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [exclude_codes, setCodes] = useState<string>('')
  const [rts, setRTS] = useState<string>('')
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (dialogOpen) {
      setZip(null)
      setXls(null)
      setFile(null)
      setRTS('')
      setError(null)
      setCodes('')
    }
  }, [dialogOpen])

  const handleImport = async () => {
    // if (file && zip) {
    // return;
    // if (file) {
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
            match_xls: xls,
          })
        } else {
          await matchServices.importMatch({
            match_html: file,
            rts: rts,
            exclude_codes: exclude_codes,
            add_zip: zip,
            match_xls: xls,
          })
        }
        onConfirm()
      } catch (err) {
        setError('Алдаа гарлааа дахин оролдоно уу')
      }
      setLoading(false)
    // }
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

  const {
    getRootProps: getXlsProps,
    getInputProps: getXlsInputProps,
    open: xlsOpen,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    maxFiles: 1,
    maxSize: 2000000,
    onDrop: (acceptedFiles) => {
      const singleFile = acceptedFiles[0]
      console.log(acceptedFiles[0])
      setXls(singleFile)
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

  const renderXlsInfo = () => {
    return (
      xls && (
        <Box sx={{ textAlign: 'center' }}>
          <Attachment />
          <Typography sx={{ fontSize: 14 }}>{xls.name}</Typography>
        </Box>
      )
    )
  }

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // eslint-disable-next-line no-console
  console.log(zip)
  console.log(xls)
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
      <Container >
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
          <Box sx={{ mt: 1 }}>
            <CustomInput
              labelPrimary="RTS"
              value={rts}
              placeholder="RTS"
              onChange={onChangeRTS}
              type="number"
            />
          </Box>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Local" {...a11yProps(0)} />
              <Tab label="International" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
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
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box
              display="flex"
              mb={1}
              mt={1}
              sx={{ height: 'auto', width: '100%' }}
              alignItems="center"
              justifyContent="center"
            >
              {renderXlsInfo()}
            </Box>
            <Box
              {...getXlsProps({ className: 'dropzone-zip' })}
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
              <input {...getXlsInputProps()} />
              <p>
                Чирэх эсвэл сонгож онооны файлаа оруулна уу. Excel файл байх
                шаардлагатай
              </p>
              <Button variant="outlined" color={'success'} onClick={xlsOpen}>
                Сонгох
              </Button>
            </Box>
          </CustomTabPanel>
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
