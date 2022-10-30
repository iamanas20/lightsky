import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Lightsky</title>
        <meta name="description" content="Lightsky is a weather app" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Fragment>
  )
}

export default MyApp
