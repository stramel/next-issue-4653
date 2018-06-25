import React from "react";
import { withRouter } from "next/router";
import { compose } from "redux";

export default compose(withRouter)(
  class extends React.Component {
    constructor(props) {
      super(props);

      console.log("AltLayout -- constructor");
    }

    componentDidMount() {
      console.log("AltLayout -- componentDidMount");
    }

    componentWillUnmount() {
      console.log("AltLayout -- componentWillUnmount");
    }

    render() {
      console.log("AltLayout -- render");
      const { children } = this.props;
      return (
        <div className="alt-layout">
          <div>Some content</div>
          <div>{children}</div>
        </div>
      );
    }
  }
);
