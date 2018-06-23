import React from "react";
import Layout from "../layouts/Layout";
import IndexView from "../views";

const Page = IndexView;

Page.renderLayout = ({ children }) => <Layout>{children}</Layout>;

export default Page;
