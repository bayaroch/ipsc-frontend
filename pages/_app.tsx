import React from 'react'
import { storeWrapper } from '@store/store'
import { ThemeProvider } from 'styled-components'
import '@common/css/main.scss'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp = ({ Component, pageProps }: any) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!@common/css/theme.scss')
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default storeWrapper.withRedux(CustomApp)
