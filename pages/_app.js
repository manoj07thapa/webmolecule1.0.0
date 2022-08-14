import "../styles/globals.css";
import { Fragment } from "react";
import Navbar from "../components/header/Navbar";
import "../amplifyConfig";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Fragment>
  );
}

export default MyApp;
