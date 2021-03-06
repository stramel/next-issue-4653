import React from "react";
import Layout from "../layouts/Layout";
import IndexView from "../views";
import SidebarLayout from "../layouts/SidebarLayout";
import hoc from "../hocs/page";
import { isNullish } from "../util";

const Page = hoc()(IndexView);

let a = {};
if (isNullish(a)) {
  a = {};
}

Page.renderLayout = ({ children }) => (
  <Layout {...a}>
    <SidebarLayout>{children}</SidebarLayout>
  </Layout>
);

export default Page;
