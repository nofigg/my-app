import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>N — F</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
