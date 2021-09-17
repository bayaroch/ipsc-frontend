import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper, StoreType } from '@store/store'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import '@common/css/theme.scss'
import '@common/css/main.scss'
import PageWithLayoutType from '@constants/page'
import theme from '@theme/index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { useStore } from 'react-redux'
import { authorizationProvider } from '@services/interceptor'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss'
import moment from 'moment'
import { ConfirmProvider } from 'material-ui-confirm'
import SnackBar from '@containers/Providers/SnackBar'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

type Props = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

const CustomApp = ({ Component, pageProps }: Props) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  const themeSass = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!@common/css/theme.scss')
  const store: StoreType = useStore()
  authorizationProvider(store)
  moment.locale('mn')

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <PersistGate persistor={persistStore(store)} loading={<div>Loading</div>}>
      <MuiThemeProvider theme={theme}>
        <ThemeStyled theme={themeSass}>
          <SnackBar />
          <ConfirmProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfirmProvider>
        </ThemeStyled>
      </MuiThemeProvider>
    </PersistGate>
  )
}

export default storeWrapper.withRedux(CustomApp)
