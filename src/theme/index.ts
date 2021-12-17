import { createTheme } from '@mui/material//styles'
import { Colors } from '@theme/colors'
import { breakpointValues } from '@theme/variables'

const font =
  "'Averta CY', 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"

const $titlefamily =
  "'Averta CY', 'Open Sans', 'Helvetica Neue', 'Helvetica','Arial', sans-serif"

export const userBreakpoints = breakpointValues

export default createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: '#F7F735',
    },
    text: {},
  },
  breakpoints: {
    values: breakpointValues,
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 22,
      fontWeight: 600,
      fontFamily: $titlefamily,
    }, // lets all big titles
    h2: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: $titlefamily,
    },
    h3: {
      fontSize: 16,
      fontFamily: $titlefamily,
      fontWeight: 600,
    },
    h4: {
      fontSize: 15,
      fontFamily: $titlefamily,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: 14,
      fontFamily: $titlefamily,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2: {
      fontSize: 13,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
    },
    overline: {
      fontSize: 10,
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '7px 16px',
        },
        containedSizeLarge: {
          padding: '12px 22px',
        },
        outlinedSizeLarge: {
          padding: '12px 22px',
        },
        outlined: {
          padding: '6px 15px',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.button-primary.primary-small': {
            fontWeight: 400,
          },
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          overflow: 'inherit',
        },
        fontSizeSmall: {
          fontSize: '0.92rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '1.5em',
          marginBottom: '0.5em',
        },
        gutterBottom: {
          marginBottom: '1em',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: 8,
          padding: 2,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          left: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '8px 12px 12px 12px',
          '&:last-child': {
            paddingBottom: '12px',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          '&:first-child': {
            paddingTop: 0,
          },
        },
      },
    },
  },
})
