import React from "react";
import { compose } from "redux";
import { withRouter } from "next/router";

export default compose(withRouter)(
  class extends React.Component {
    constructor(props) {
      super(props);

      console.log("MainLayout -- constructor");
    }

    componentDidMount() {
      console.log("MainLayout -- componentDidMount");
    }

    componentWillUnmount() {
      console.log("MainLayout -- componentWillUnmount");
    }

    render() {
      console.log("MainLayout -- render");
      const { children } = this.props;
      return (
        <div className="main-layout">
          <div className="detail-pane">{children}</div>
          <div className="static">Static Content</div>
        </div>
      );
    }
  }
);
