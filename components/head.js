import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";
const Head = (props) => (
  <NextHead>
    {/* Meta tags start */}
    <meta charset="UTF-8" />
    <meta name="description" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Meta tags end */}
    <title>{props.title}</title>
    <link rel="icon" href="./img/core-img/favicon.ico" />
    {/* Css start */}
    <link
      href="https://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css"
      rel="stylesheet"
      type="text/css"
    ></link>
    <link rel="manifest" href="./manifest.webmanifest"></link>
    <link rel="shortcut icon" href="/static/images/logo/logo-site.png" />
    <link rel="apple-touch-icon" href="/static/images/logo/logo-site.png" />
    <link rel="stylesheet" href="/static/css/style.min.css"></link>
    <link rel="stylesheet" href="/static/css/custom.css"></link>
    {/* Css end */}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
