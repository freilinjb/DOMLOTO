import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

const Layout = () => {
  return (
    <>
      <Header />
      <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
        <div class="wrapper">
          <Navbar />

          <Aside />
          {/* <!-- Content Wrapper. Contains page content --> */}
          <div class="content-wrapper">
            <Breadcrumb />
          </div>
        </div>
        {/* <!-- Control Sidebar --> */}
        <aside class="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
        {/* <!-- /.control-sidebar --> */}
        <Footer/>
      </body>
    </>
  );
};

export default Layout;
