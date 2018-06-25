import React from "react";
import { withRouter } from "next/router";
import { compose } from "redux";

export default compose(withRouter)(
  class extends React.Component {
    constructor(props) {
      super(props);

      console.log("SidebarLayout -- constructor");
    }

    componentDidMount() {
      console.log("SidebarLayout -- componentDidMount");
    }

    componentWillUnmount() {
      console.log("SidebarLayout -- componentWillUnmount");
    }

    render() {
      console.log("SidebarLayout -- render");
      const { children } = this.props;
      return (
        <div className="sidear-layout">
          <div className="sidebar">sidebar</div>
          <div className="content">{children}</div>
        </div>
      );
    }
  }
);
