import React, { useState } from 'react'
import { Alert, Box, Card, CardContent, CardHeader } from '@mui/material/'
import { matchServices } from '@services/match.services'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import { DriveFileMove } from '@mui/icons-material'
import { isIOS } from 'react-device-detect'
import { useS3Upload } from 'next-s3-upload'

interface CSV {
  id: string
}

const DownloadCSV: React.FC<CSV> = ({ id }) => {
  const [url, setUrl] = useState<string>('#')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const cloudfront = process.env.NEXT_PUBLIC_CLOUD_FRONT_URL

  const { uploadToS3 } = useS3Upload()

  const fetchCSV = async (id: string) => {
    setError(false)
    setLoading(true)
    try {
      const res = await matchServices.csvDownload(id)
      const blob = await window.URL.createObjectURL(
        new Blob([res.data], { type: 'text/csv;charset=utf-8' })
      )
      if (!isIOS) {
        setUrl(blob)
      } else {
        if (url) {
          try {
            const raw = await new Blob([res.data], {
              type: 'text/csv;charset=utf-8',
            })
            const file = await new File([raw], `match-${id}.csv`, {
              type: 'text/csv;charset=utf-8',
            })
            const { url, key } = await uploadToS3(file)
            let absoluteUrl
            if (cloudfront) {
              absoluteUrl = `${cloudfront}/${key}`
            } else {
              absoluteUrl = url
            }
            setUrl(absoluteUrl)
          } catch (err) {
            // eslint-disable-next-line no-console
            setError(true)
          }
        }
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  const renderButton = () => {
    if (url === '#' && !error && !loading) {
      return (
        <LoadingButton
          startIcon={<DriveFileMove />}
          fullWidth
          variant="outlined"
          color="inherit"
          onClick={() => fetchCSV(id)}
        >
          Export
        </LoadingButton>
      )
    }
    if (loading || (url && !error)) {
      return (
        <LoadingButton
          startIcon={<SaveIcon />}
          component="a"
          href={url}
          target="_blank"
          loading={loading}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Татах
        </LoadingButton>
      )
    }
    return null
  }

  return (
    <Card
      sx={{
        '& .Cmt-header-root': {
          paddingTop: 3,
          paddingBottom: 0,
        },
      }}
    >
      <CardHeader
        sx={{ borderBottom: '1px solid #eee' }}
        title="Тэмцээний CSV Файл татаж авах"
      ></CardHeader>
      <CardContent
        sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
      >
        {renderButton()}
        {error ? (
          <Alert severity="warning">
            Алдаа гарлаа -{' '}
            <Box
              onClick={(e: any) => {
                e.preventDefault()
                fetchCSV(id)
              }}
              component="span"
              sx={{ fontWeight: 600, cursor: 'pointer' }}
            >
              энд дарж
            </Box>{' '}
            дахин оролдоно уу
          </Alert>
        ) : (
          ''
        )}
      </CardContent>
    </Card>
  )
}

export default DownloadCSV
