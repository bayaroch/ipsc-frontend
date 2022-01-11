import { Box, BoxProps } from '@mui/material'
import { Meta } from '@store/metadata/actions/types'

interface LoaderProps extends BoxProps {
  meta: Meta
}

const BasicLoader: React.FC<LoaderProps> = ({ meta, ...rest }) => {
  const renderLoader = () => {
    if (!meta.loaded && meta.pending && !meta.error) {
      return (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
          }}
          {...rest}
        >
          <Box className="dot-flashing" />
        </Box>
      )
    }
    return null
  }

  return <>{renderLoader()}</>
}

export default BasicLoader
