import React from 'react'
import { storeWrapper } from '@store/store'
import { ThemeProvider } from '@material-ui/core'
import { ThemeProvider as ThemeStyled } from 'styled-components'
import '@common/css/theme.scss'
import '@common/css/main.scss'
import theme from '@theme/index'
/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const CustomApp = ({ Component, pageProps }: any) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  const themeSass = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!@common/css/theme.scss')
  return (
    <ThemeStyled theme={themeSass}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThemeStyled>
  )
}

export default storeWrapper.withRedux(CustomApp)
