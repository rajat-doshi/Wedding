import React, { useEffect, useState } from "react";
import { Input } from "../../components/Common/index";
import Head from "../../components/head";
import { cloneDeep } from "lodash";
import withRedux from "next-redux-wrapper";
import makeStore from "../../Redux/index";
import { getFormDetails } from "../../util/helper";
import { ts, te } from "../../util/ReduxToaster";
import Nav from "../../components/nav";
import { postLogin } from "../../util/Services/UserMaster";
import LoginComponent from "../../components/Public/Login/Login";
import { Provider } from "react-redux";
import store from "../../Redux"

const Login = (props) => {
  return (
    <>
      <Nav />
      <LoginComponent />

    </>
  );
};

export default Login;
