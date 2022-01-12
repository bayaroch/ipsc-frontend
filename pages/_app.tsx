import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper, StoreType } from '@store/store'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider as ThemeStyled } from 'styled-components'
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
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { StylesProvider } from '@mui/styles'
import '@common/css/main.scss'
import Seo from '@components/common/Seo'
import { UploaderProvider } from '@containers/Providers/FileUpload'
/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

export const cache = createCache({ key: 'css', prepend: true })

type Props = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
  emotionCache?: EmotionCache
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
    <StylesProvider injectFirst>
      <CacheProvider value={cache}>
        <Seo
          title="IPSC Action Air Mongolia"
          description="Практик буудлагын спортын экшн эйр төрлөөр хичээллэх, олон улс, тив, дэлхийн тэмцээнд тамирчдаа бэлтгэх зорилготой спорт клуб юм."
        />
        <PersistGate
          persistor={persistStore(store)}
          loading={<div>Loading</div>}
        >
          <ThemeProvider theme={theme}>
            <ThemeStyled theme={themeSass}>
              <CssBaseline />
              <SnackBar />
              <ConfirmProvider>
                <UploaderProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </UploaderProvider>
              </ConfirmProvider>
            </ThemeStyled>
          </ThemeProvider>
        </PersistGate>
      </CacheProvider>
    </StylesProvider>
  )
}

export default storeWrapper.withRedux(CustomApp)
