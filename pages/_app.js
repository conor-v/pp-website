import '../styles/globals.css'
import {ApolloProvider} from "@apollo/client";
import apolloClient from '../utils/apollo-client'
import Layout from '../comps/_default/layout';

function MyApp({ Component, pageProps }) {
  return(
  <ApolloProvider client={apolloClient}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
  )
}

export default MyApp
