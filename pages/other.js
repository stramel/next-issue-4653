import OtherView from "../views/other";
import renderLayout from "../views/renderLayout";
import hoc from "../hocs/page";

const Page = hoc()(OtherView);

Page.renderLayout = renderLayout();

export default Page;
