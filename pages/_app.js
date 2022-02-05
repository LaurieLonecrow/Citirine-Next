import Layout from '../layout'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (<>
    <GlobalStyle />
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp
