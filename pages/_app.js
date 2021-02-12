import '../styles/globals.css'
import Layout from '../components/layout'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/certificates">
        <a>Certificates</a>
      </Link>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
