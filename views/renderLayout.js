import React from "react";
import Layout from "../layouts/Layout";
import SidebarLayout from "../layouts/SidebarLayout";
import MainLayout from "../layouts/MainLayout";

export default (props = {}, props2 = {}) => {
  return ({ children }) => (
    <Layout {...props}>
      <SidebarLayout {...props2}>
        <MainLayout>{children}</MainLayout>
      </SidebarLayout>
    </Layout>
  );
};
