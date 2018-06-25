import React from "react";
import Layout from "../layouts/Layout";
import AltLayout from "../layouts/AlternativeLayout";
import AltView from "../views/alt";

const Page = AltView;

Page.renderLayout = ({ children }) => (
  <Layout>
    <AltLayout>{children}</AltLayout>
  </Layout>
);

export default Page;
