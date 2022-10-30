import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Anas Latique</title>
        <meta name="description" content="Anas Latique creative portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  )
}

export default MyApp
