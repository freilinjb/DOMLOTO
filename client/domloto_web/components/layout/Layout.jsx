import React, { Component, useState } from "react";
import Head from "next/head";

import Header from "./Header";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";

import LayoutPrincipal from "./LayoutPrincipal";

const Layout = (props) => {
  // const classBody = "hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
  let classBody = null;
  // console.log('body: ', classBody.split(' '));
  // console.log('hola: ', ['hold-transition','sidebar-mini','layout-fixed','layout-navbar-fixed','layout-footer-fixed']);
  switch (props.page) {
    case "register":
    case "login":
      // classBody = ;
      LayoutPrincipal(["login-page"]);
      break;

    default:
      LayoutPrincipal(['hold-transition','sidebar-mini','layout-fixed','layout-navbar-fixed','layout-footer-fixed']);
      // classBody = "hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed";
      break;
  }
  console.log("hola: ", classBody);
  console.log("page: ", props.page);

  
  // hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed
  // console.log('body:', Component);
  return (
    <>
      {/* <Header /> */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <title>AdminLTE 3 | Dashboard 2</title>

        <link
          rel="stylesheet"
          href="/static/plugins/fontawesome-free/css/all.min.css"
        />
        {/* <!-- overlayScrollbars --> */}
        <link
          rel="stylesheet"
          href="/static/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
        />
        {/* <!-- Theme style --> */}
        <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
        {/* <!-- Google Font: Source Sans Pro --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
          rel="stylesheet"
        />
        <script src="/static/index.js"></script>
      </Head>

      {props.page !== "login" && props.page !== "register" ? (
        <>
          <div className="wrapper">
            <Navbar />
            <Aside />

            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
              <Breadcrumb />
              {props.children}
            </div>
          </div>
          {/* <!-- Control Sidebar --> */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* <!-- Control sidebar content goes here --> */}
          </aside>
          {/* <!-- /.control-sidebar --> */}
          <Footer />
        </>
      ) : (
        props.children
      )}

      {/* SCRIPT */}
      {/* <!-- ./wrapper -->

          <!-- REQUIRED SCRIPTS -->
          <!-- jQuery --> */}
      <script src="static/plugins/jquery/jquery.min.js"></script>
      {/* <!-- Bootstrap --> */}
      <script src="static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
      {/* <!-- overlayScrollbars --> */}
      <script src="static/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
      {/* <!-- AdminLTE App --> */}
      <script src="static/dist/js/adminlte.js"></script>

      {/* <!-- OPTIONAL SCRIPTS --> */}
      {/* <script src="static/dist/js/demo.js"></script> */}

      {/* <!-- PAGE PLUGINS --> */}
      {/* <!-- jQuery Mapael --> */}
      <script src="static/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
      <script src="static/plugins/raphael/raphael.min.js"></script>
      <script src="static/plugins/jquery-mapael/jquery.mapael.min.js"></script>
      <script src="static/plugins/jquery-mapael/maps/usa_states.min.js"></script>
      {/* <!-- ChartJS --> */}
      <script src="static/plugins/chart.js/Chart.min.js"></script>

      {/* <!-- PAGE SCRIPTS --> */}
      {/* <script src="static/dist/js/pages/dashboard.js"></script> */}
      {/* END SCRIPT */}
    </>
  );
};

export default Layout;
