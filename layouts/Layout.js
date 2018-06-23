import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);

    console.log("Layout -- constructor");
  }

  componentDidMount() {
    console.log("Layout -- componentDidMount");
  }

  componentWillUnmount() {
    console.log("Layout -- componentWillUnmount");
  }

  render() {
    console.log("Layout -- render");
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}
