import { useEffect } from 'react'
import LoginLayout from '@components/layout/LoginLayout'
import useLoginForm from '@utils/hooks/useLoginForm'
import { LoginInput } from '@utils/hooks/useLoginForm'
import { isAuth } from '@store/auth/selectors'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import {
  CircularProgress,
  Box,
  Paper,
  Grid,
  Button,
  Hidden,
  IconButton,
  InputBase,
  Typography,
  Divider,
} from '@mui/material/'
import Alert from '@mui/material//Alert'
import { VerifiedUser, Lock } from '@mui/icons-material'
import _ from 'lodash'
import { Colors } from '@theme/colors'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'

const LoginPage: React.FC = () => {
  const { methods, submitLogin, Controller, metadata } = useLoginForm()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const router = useRouter()
  const isLoggedIn = useSelector(isAuth)
  const isLoading = metadata.pending && !metadata.error && !metadata.loaded
  const isError = metadata.error && !metadata.pending

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push('/admin/')
    }
  }, [isLoggedIn])

  const onSubmit = (data: LoginInput) => {
    submitLogin(data)
  }

  return (
    <LoginLayout>
      <>
        <Box
          sx={{
            padding: '0 15px',
            margin: {
              lg: '0 auto',
              xl: '0 auto',
              md: '0 auto',
              sm: '30px auto',
              xs: '30px auto',
            },
            maxWidth: 800,
            width: '100%',
          }}
        >
          <Paper
            sx={{
              boxShadow: '0 10px 30px 0 rgb(22 53 160 / 35%)',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: 2,
              zIndex: 90,
              width: '100%',
            }}
          >
            <Grid container>
              <Grid sm={12} item md={7}>
                <Box sx={{ textAlign: 'center', padding: '2em 0 0 0' }}>
                  <Typography variant="h1">Нэвтрэх</Typography>
                </Box>
                <Box
                  sx={{
                    padding: '1.5rem',
                    paddingBottom: '2em',
                    position: 'relative',
                    zIndex: 91,
                  }}
                >
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                      {isError ? (
                        <Alert severity="warning" style={{ marginBottom: 10 }}>
                          Нэвтэрч чадсангүй. Оруулсан мэдээллээ шалгана уу
                        </Alert>
                      ) : null}
                    </Box>
                    <Paper
                      sx={{
                        padding: '2px 4px',
                        paddingRight: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
                      }}
                      elevation={1}
                    >
                      <IconButton sx={{ padding: '10px' }} aria-label="menu">
                        <VerifiedUser />
                      </IconButton>
                      <Controller
                        name="usercode"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                          <InputBase
                            inputRef={ref}
                            {...rest}
                            sx={{
                              marginLeft: (theme) => theme.spacing(1),
                              flex: 1,
                              '&:-internal-autofill-previewed': {
                                backgroundColor: 'transparent !important',
                              },
                              '&:-internal-autofill-selected': {
                                backgroundColor: 'transparent !important',
                              },
                            }}
                            placeholder="Гишүүнчлэлийн дугаар e.g. 077"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            error={!!errors.usercode}
                          />
                        )}
                      />
                    </Paper>
                    <Typography
                      variant="body1"
                      sx={{
                        height: 14,
                        fontSize: 12,
                        color: Colors.red,
                        marginBottom: 3,
                        paddingTop: 1,
                      }}
                    >
                      {errors.usercode
                        ? _.get(errors.usercode, 'message', '')
                        : ''}
                    </Typography>
                    <Paper
                      sx={{
                        padding: '2px 4px',
                        paddingRight: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
                      }}
                      elevation={1}
                    >
                      <IconButton sx={{ padding: '10px' }} aria-label="menu">
                        <Lock />
                      </IconButton>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                          <InputBase
                            {...rest}
                            inputRef={ref}
                            placeholder={'Нууц үг'}
                            type="password"
                            error={!!errors.password}
                          />
                        )}
                      />
                    </Paper>
                    <Typography
                      variant="body1"
                      sx={{
                        height: 14,
                        fontSize: 12,
                        color: Colors.red,
                        marginBottom: 3,
                        paddingTop: 1,
                      }}
                    >
                      {errors.password
                        ? _.get(errors.password, 'message', '')
                        : ''}
                    </Typography>
                    <Box className="field">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        style={{ width: '100%', height: 48 }}
                      >
                        {isLoading ? (
                          <CircularProgress
                            style={{
                              height: 14,
                              width: 14,
                              color: Colors.white,
                            }}
                          />
                        ) : (
                          <>Нэвтрэх</>
                        )}
                      </Button>
                    </Box>
                  </form>
                </Box>
                <Divider />
                <Box
                  sx={{
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: 'italic',
                      lineHeight: 1.3,
                      color: Colors.grey[200],
                      fontSize: 12,
                      textAlign: 'center',
                    }}
                  >
                    Зөвхөн `Экшн Эйр Буудлагын Клуб`-ын гишүүд нэвтрэх эрхтэй.
                    Хэрэглэгчийн нэвтрэх мэдээлэллийг А. Арслантай холбогдож
                    авна уу.
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pb={2}
                >
                  <Link href="/">
                    <a style={{ color: '#333' }}>
                      <KeyboardReturnIcon
                        style={{
                          position: 'relative',
                          top: 10,
                          marginRight: 5,
                        }}
                      />
                      Буцах
                    </a>
                  </Link>
                </Box>
              </Grid>
              <Hidden only={'sm'}>
                <Grid
                  sx={{
                    position: 'relative',
                    '&:after': {
                      background:
                        "url('images/login-side.jpg') no-repeat center center",
                      backgroundSize: 'cover',
                      position: 'absolute',
                      top: 0,
                      right: -1,
                      bottom: 0,
                      content: '""',
                      display: 'block',
                      left: 1,
                    },
                  }}
                  item
                  md={5}
                  sm={12}
                  xs={12}
                >
                  <Box
                    sx={{
                      padding: '2rem',
                      position: 'relative',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      height: '100%',
                      width: '100%',
                      zIndex: 10,
                      display: {
                        xl: 'flex',
                        lg: 'flex',
                        md: 'flex',
                        sm: 'none',
                        xs: 'none',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: '80px',
                        maxWidth: '80px',
                        margin: '0 auto',
                        img: {
                          width: '100%',
                          height: 'auto',
                        },
                      }}
                    >
                      <img src="images/logo.png" alt="dvc" />
                    </Box>
                    <Box className="intro-headline">
                      <Box style={{ fontSize: 48 }}>IPSC</Box>
                      <Box>Action Air</Box>
                      <Box style={{ fontSize: 18 }}>Mongolia</Box>
                    </Box>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Paper>
        </Box>
      </>
    </LoginLayout>
  )
}

export default LoginPage

// const useStyles = makeStyles((theme) => ({
//   // container: {
//   //   padding: '0 15px',
//   //   maxWidth: 800,
//   //   width: '100%',
//   // },
//   // loginBox: {
//   //   webKitBoxShadow: '0 10px 30px 0 rgb(22 53 160 / 35%)',
//   //   boxShadow: '0 10px 30px 0 rgb(22 53 160 / 35%)',
//   //   overflow: 'hidden',
//   //   margin: '0 auto',
//   //   position: 'relative',
//   //   borderRadius: 12,
//   //   zIndex: 90,
//   //   width: '100%',
//   // },
//   // text: {
//   //   fontStyle: 'italic',
//   //   lineHeight: 1.3,
//   //   color: Colors.grey[200],
//   //   fontSize: 12,
//   //   textAlign: 'center',
//   // },
//   // loginHeader: {
//   //   textAlign: 'center',
//   //   padding: '2em 0 0 0',
//   // },
//   // loginInner: {
//   //   padding: '1.5rem',
//   //   paddingBottom: '2em',
//   //   position: 'relative',
//   //   zIndex: 91,
//   // },
//   // addInfo: {
//   //   padding: '1rem 1.5rem',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // loginButton: {},
//   // root: {
//   //   padding: '2px 4px',
//   //   paddingRight: '20px',
//   //   display: 'flex',
//   //   alignItems: 'center',
//   //   width: '100%',
//   //   webKitBoxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
//   //   boxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
//   // },
//   // input: {
//   //   marginLeft: theme.spacing(1),
//   //   flex: 1,
//   //   '&:-internal-autofill-previewed': {
//   //     backgroundColor: 'transparent !important',
//   //   },
//   //   '&:-internal-autofill-selected': {
//   //     backgroundColor: 'transparent !important',
//   //   },
//   // },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
//   helperText: {
//     height: 14,
//     fontSize: 12,
//     color: Colors.red,
//     marginBottom: theme.spacing(3),
//     paddingTop: theme.spacing(1),
//   },
//   loginSide: {
//     position: 'relative',
//     '&:after': {
//       background: "url('images/login-side.jpg') no-repeat center center",
//       backgroundSize: 'cover',
//       position: 'absolute',
//       top: 0,
//       right: -1,
//       bottom: 0,
//       content: '""',
//       display: 'block',
//       left: 1,
//     },
//   },
//   contentSide: {
//     padding: '2rem',
//     position: 'relative',
//     textAlign: 'center',
//     zIndex: 10,
//   },
//   logoHolder: {
//     marginTop: 80,
//     maxWidth: 80,
//     margin: '0 auto',
//     img: {
//       width: '100%',
//       height: 'auto',
//     },
//   },
// }))
