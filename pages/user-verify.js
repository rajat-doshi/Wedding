import React, { useEffect, useState } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import UserVerifyComponent from "../components/Public/UserVeify";
import store from "../Redux";
import {Provider} from "react-redux"
const UserVerify = (props) => {
  return (
    <>
    <Provider store={store} >
      <Head />
      <Nav />
      <UserVerifyComponent/>
      </Provider>
    </>
  );
};

export default UserVerify;
