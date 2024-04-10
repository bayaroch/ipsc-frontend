import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link'
import {
  Box,
  Button,
  Paper,
  Grid,
  Typography,
  Divider,
  Alert,
  IconButton,
  InputBase,
  Hidden,
} from '@mui/material/'
import _ from 'lodash'
import { AlternateEmail } from '@mui/icons-material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import LoginLayout from '@components/layout/LoginLayout'
import { useDispatch, useSelector } from 'react-redux';
import searchStore from '@store/auth'
import { clearPwdMsg, forgot } from '@store/auth/actions';
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Colors } from '@theme/colors'
import { useRouter } from 'next/router';

const { selectors } = searchStore

export interface ForgotPasswordInput {
  email: string
}

const ForgotPassword: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const router = useRouter()
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().required('Email required'),
      }),
    []
  )
  const methods = useForm<ForgotPasswordInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods
  const dispatch = useDispatch()
  const msg = useSelector(selectors.getPwdMsg)

  useEffect(() => {
    dispatch(clearPwdMsg())
  }, [])

  const onSubmit = (params: ForgotPasswordInput) => {
    dispatch(forgot(params))
    setShow(true)
    if (msg && msg.msg == 'If this user exists, we have sent you a password reset email.') {
      router.push('/reset-password')
    }
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
                  <Typography variant="h1">Request password reset</Typography>
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
                      {show && msg ? (
                        <Alert severity="info" style={{ marginBottom: 10 }}>
                          {msg.msg}
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
                        <AlternateEmail />
                      </IconButton>
                      <Controller
                        name="email"
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
                            placeholder="Email Address"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            error={!!errors.email}
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
                      {errors.email
                        ? _.get(errors.email, 'message', '')
                        : ''}
                    </Typography>
                    {/* SUBMIT */}
                    <Box className="field">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        style={{ width: '100%', height: 48 }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </form>
                </Box>
                <Divider />
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pb={2}
                >
                  <Link href="/login">
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
                        maxWidth: '160px',
                        margin: '0 auto',
                        img: {
                          width: '100%',
                          height: 'auto',
                        },
                      }}
                    >
                      <img src="images/logo-club.png" alt="dvc" />
                    </Box>
                    {/* <Box className="intro-headline">
                      <Box style={{ fontSize: 48 }}>IPSC</Box>
                      <Box>Action Air</Box>
                      <Box style={{ fontSize: 18 }}>Mongolia</Box>
                    </Box> */}
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

export default ForgotPassword;
