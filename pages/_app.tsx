import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useState } from "react";
import Loader from "../components/LoaderPacman";




function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log(`Laster inn ${url}`);
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log(`Finnised loading`);
    setLoading(false);
  });
  Router.events.on("routeChangeError", (url) => {
    console.log(`Noe gikk galt`);
  });

  return (
    <>
      {loading ? <Loader /> : <Component {...pageProps} />}
      {/* {loading && <Loader />} */}
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
