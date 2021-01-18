import "../styles/main.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../utils/next-seo.config";
import Router from "next/router";
import { useState, useEffect } from "react";




function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  

  useEffect(() => {
    const handlePageLoading = () => {
      document.documentElement.classList.remove("is-loading");
      document.documentElement.classList.add("is-loaded", "is-ready");
    }

    const start = () => {
      setIsLoading(true);
    };
    const complete = () => {
      setIsLoading(false);
      setIsError(false);
      setError();
    };
    const error = (error) => {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    };

    window.addEventListener("load", handlePageLoading);
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", complete);
    Router.events.on("routeChangeError", error);

    return () => {
      window.removeEventListener("load", handlePageLoading);
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", complete);
      Router.events.off("routeChangeError", error);
    };
  }, []);
  
  return (
    <>
      {isLoading ? <h1>Loading...</h1> : 
      <><DefaultSeo {...SEO} />
      <Component {...pageProps} /></>}
    </>
  );
}

export default MyApp;
