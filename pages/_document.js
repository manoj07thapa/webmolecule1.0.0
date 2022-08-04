import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" />
        </Head>
        <body className="bg-slate-900 font-roboto text-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
