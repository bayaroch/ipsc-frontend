import { useEffect } from 'react'
import LoginLayout from '@components/layout/LoginLayout'
import useLoginForm from '@utils/hooks/useLoginForm'
import { LoginInput } from '@utils/hooks/useLoginForm'
import { isAuth } from '@store/auth/selectors'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import {
  CircularProgress,
  Box,
  Paper,
  makeStyles,
  Grid,
  Button,
  Hidden,
  IconButton,
  InputBase,
  Typography,
  Divider,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { VerifiedUser, Lock } from '@material-ui/icons'
import _ from 'lodash'
import { Colors } from '@theme/colors'

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
  const classes = useStyles()

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
        <Box className={classes.container}>
          <Paper className={classes.loginBox}>
            <Grid container>
              <Grid sm={12} item md={7}>
                <Box className={classes.loginHeader}>
                  <Typography variant="h1">Нэвтрэх</Typography>
                </Box>
                <Box className={classes.loginInner}>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                      {isError ? (
                        <Alert severity="warning" style={{ marginBottom: 10 }}>
                          Нэвтэрч чадсангүй. Оруулсан мэдээллээ шалгана уу
                        </Alert>
                      ) : null}
                    </Box>
                    <Paper className={classes.root} elevation={1}>
                      <IconButton
                        className={classes.iconButton}
                        aria-label="menu"
                      >
                        <VerifiedUser />
                      </IconButton>
                      <Controller
                        name="usercode"
                        control={control}
                        render={({ field: { ref, ...rest } }) => (
                          <InputBase
                            inputRef={ref}
                            {...rest}
                            className={classes.input}
                            placeholder="Гишүүнчлэлийн дугаар e.g. 077"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            error={!!errors.usercode}
                          />
                        )}
                      />
                    </Paper>
                    <p className={classes.helperText}>
                      {errors.usercode
                        ? _.get(errors.usercode, 'message', '')
                        : ''}
                    </p>
                    <Paper className={classes.root} elevation={1}>
                      <IconButton
                        className={classes.iconButton}
                        aria-label="menu"
                      >
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
                    <p className={classes.helperText}>
                      {errors.password
                        ? _.get(errors.password, 'message', '')
                        : ''}
                    </p>
                    <div className="field">
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
                    </div>
                  </form>
                </Box>
                <Divider />
                <Box className={classes.addInfo}>
                  <Typography className={classes.text}>
                    Зөвхөн `Экшн Эйр Буудлагын Клуб`-ын гишүүд нэвтрэх эрхтэй.
                    Хэрэглэгчийн нэвтрэх мэдээлэллийг А. Арслантай холбогдож
                    авна уу.
                  </Typography>
                </Box>
              </Grid>
              <Hidden only={'sm'}>
                <Grid className={classes.loginSide} item md={5}>
                  <Box className={classes.contentSide}>
                    <Box className={classes.logoHolder}>
                      <img src="images/logo-dvc.png" alt="dvc" />
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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 15px',
    maxWidth: 800,
    width: '100%',
  },
  loginBox: {
    webKitBoxShadow: '0 10px 30px 0 rgb(22 53 160 / 35%)',
    boxShadow: '0 10px 30px 0 rgb(22 53 160 / 35%)',
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative',
    borderRadius: 12,
    zIndex: 90,
    width: '100%',
  },
  text: {
    fontStyle: 'italic',
    lineHeight: 1.3,
    color: Colors.grey[200],
    fontSize: 12,
    textAlign: 'center',
  },
  loginHeader: {
    textAlign: 'center',
    padding: '2em 0 0 0',
  },
  loginInner: {
    padding: '1.5rem',
    paddingBottom: '2em',
    position: 'relative',
    zIndex: 91,
  },
  addInfo: {
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {},
  root: {
    padding: '2px 4px',
    paddingRight: '20px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    webKitBoxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
    boxShadow: '0 1px 2px 0 rgb(6 12 46 / 80%)',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    '&:-internal-autofill-previewed': {
      backgroundColor: 'transparent !important',
    },
    '&:-internal-autofill-selected': {
      backgroundColor: 'transparent !important',
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  helperText: {
    height: 14,
    fontSize: 12,
    color: Colors.red,
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
  loginSide: {
    position: 'relative',
    '&:after': {
      background: "url('images/login-side.jpg') no-repeat center center",
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      right: -1,
      bottom: 0,
      content: '""',
      display: 'block',
      left: 1,
    },
  },
  contentSide: {
    padding: '2rem',
    position: 'relative',
    textAlign: 'center',
    zIndex: 10,
  },
  logoHolder: {
    marginTop: 80,
    maxWidth: 80,
    margin: '0 auto',
    img: {
      width: '100%',
      height: 'auto',
    },
  },
}))
