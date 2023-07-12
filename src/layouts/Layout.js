import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, headerColor, isTransparent }) => {
  return (
    <Fragment>
      <Header headerColor={headerColor} isTransparent={isTransparent} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
