import NextHead from "next/head";
import { string } from "prop-types";

const Head = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>AdminLTE 3 | Dashboard 2</title>

      {/* <!-- Font Awesome Icons --> */}
      <link
        rel="stylesheet"
        href="static/plugins/fontawesome-free/css/all.min.css"
      />
      {/* <!-- overlayScrollbars --> */}
    </NextHead>
  );
};

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string,
};

export default Head;
