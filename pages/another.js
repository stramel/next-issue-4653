import AnotherView from "../views/another";
import renderLayout from "../views/renderLayout";
import hoc from "../hocs/page";

const Page = hoc()(AnotherView);

Page.renderLayout = renderLayout({
  mapLayoutProps: { detailPaneOpen: false },
  sidebarLayoutProps: { collapsed: false, overridePreference: true }
});

export default Page;
