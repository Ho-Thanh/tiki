import React from "react";
import "../styles/style.scss";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
