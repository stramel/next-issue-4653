import React from "react";
import { compose } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  isFunction = fn => typeof fn === "function";

  render() {
    const { Component, pageProps, router, store } = this.props;

    const page = this.isFunction(Component.renderLayout) ? (
      Component.renderLayout({
        children: <Component {...pageProps} router={router} />,
        ...pageProps,
        router
      })
    ) : (
      <Component {...pageProps} router={router} />
    );

    return (
      <Container>
        <Provider store={store}>
          <>{page}</>
        </Provider>
      </Container>
    );
  }
}

export default compose(withRedux(initStore))(MyApp);
