import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);
  return (
    <Fragment>
      {loading && <Preloader />}
      {content && <Component {...pageProps} />}
    </Fragment>
  );
}
