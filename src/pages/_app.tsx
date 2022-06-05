import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import theme from "../styles/themes/defaut";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  </Head>
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
  </>
  )
}

export default MyApp
