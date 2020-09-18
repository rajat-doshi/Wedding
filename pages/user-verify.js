import React, { useEffect, useState } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import UserVerifyComponent from "../components/Public/UserVeify"
const UserVerify = (props) => {
  return (
    <>
      <Head />
      <Nav />
      <UserVerifyComponent/>
    </>
  );
};

export default UserVerify;
