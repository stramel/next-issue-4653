import React from "react";
import Layout from "../layouts/Layout";
import SidebarLayout from "../layouts/SidebarLayout";
import TestView from "../views/test";
import { isNullish, noop } from "../util/index";

const Page = TestView;

let a = {};

if (isNullish(a)) {
  a = noop;
}

Page.renderLayout = ({ children }) => (
  <Layout {...a}>
    <SidebarLayout>{children}</SidebarLayout>
  </Layout>
);

export default Page;
