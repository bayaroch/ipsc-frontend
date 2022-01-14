import React, { useEffect, useState } from 'react'
import { Alert, Box, Card, CardContent, CardHeader } from '@mui/material/'
import { matchServices } from '@services/match.services'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'

interface CSV {
  id: string
}

const DownloadCSV: React.FC<CSV> = ({ id }) => {
  const [url, setUrl] = useState<string>('#')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const fetchCSV = async (id: string) => {
    setError(false)
    setLoading(true)
    try {
      const res = await matchServices.csvDownload(id)
      const url = await window.URL.createObjectURL(
        new Blob([res.data], { type: 'text/csv;charset=utf-8' })
      )
      setUrl(url)
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCSV(id)
  }, [id])

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
        {error === false ? (
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
        ) : (
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
        )}
      </CardContent>
    </Card>
  )
}

export default DownloadCSV
