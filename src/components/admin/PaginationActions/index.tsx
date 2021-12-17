import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTheme, Box } from '@mui/material/'

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

const PaginationActions = (props: TablePaginationActionsProps) => {
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page + 1)
  }

  return (
    <Box
      sx={{
        flexShrink: 0,
        marginLeft: 2.5,
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 1}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage)}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  )
}

export default PaginationActions
