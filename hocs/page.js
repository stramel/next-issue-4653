import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

const hoc = C => props => (
  <React.Fragment>
    <C {...props} />
  </React.Fragment>
);

export default (...args) => compose(connect(...args), hoc);
