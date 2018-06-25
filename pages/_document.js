import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import hoistNonReactStatics from "hoist-non-react-statics";
import { ServerStyleSheet } from "styled-components";

const hoistStatics = higherOrderComponent => BaseComponent => {
  const NewComponent = higherOrderComponent(BaseComponent);
  hoistNonReactStatics(NewComponent, BaseComponent);
  return NewComponent;
};

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const enhancer = hoistStatics(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const page = renderPage(enhancer);
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes"
          />

          <link rel="icon" href="/static/favicon.ico" />

          {/* See https://goo.gl/OOhYW5 */}
          <link rel="manifest" href="/static/manifest/manifest.json" />

          {/* Fallbacks for manifest.json */}
          {/* Add to homescreen for Chrome on Android */}
          <meta name="mobile-web-app-capable" content="yes" />
          {/* Add to homescreen for Safari on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          {/* Homescreen icons */}
          <link rel="apple-touch-icon" href="/static/manifest/icon-48x48.png" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/manifest/icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/static/manifest/icon-96x96.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/manifest/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/static/manifest/icon-192x192.png"
          />
          {/* Tile icon for Windows 8 (144x144 + tile color) */}
          <meta
            name="msapplication-TileImage"
            content="/static/manifest/icon-144x144.png"
          />
          <meta name="msapplication-tap-highlight" content="no" />

          {/* Default twitter cards */}
          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:site" content="@cfsboom" /> */}
          {/* <meta property="og:type" content="website" /> */}
          <meta
            property="og:image"
            content="/static/manifest/icon-144x144.png"
          />
          {/* <meta property="og:url" content="https://coolfiresolutions.com" /> */}

          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
