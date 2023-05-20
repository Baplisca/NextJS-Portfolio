import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import "../../styles/global.css";
import { GoogleAnalytics } from "../common/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
