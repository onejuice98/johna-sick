import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "@/styles/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>LngPuFi</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
