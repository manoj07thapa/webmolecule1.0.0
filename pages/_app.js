import "../styles/globals.css";
import { Fragment } from "react";
import Navbar1 from "../components/header/Navbar1";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar1 />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
