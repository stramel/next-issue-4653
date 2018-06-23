import React from "react";
import Layout from "../layouts/Layout";

export default props => {
  props = props || {};

  return ({ children }) => (
    <Layout>
      <div className="sub-layout" {...props}>
        {children}
      </div>
    </Layout>
  );
};
