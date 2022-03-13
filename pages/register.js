import React from "react";
import Nav from "../components/nav";

import { RegisterComponent } from "../components/Public";
import Head from "../components/head";
import { Provider } from 'react-redux'
import store from "../Redux/index";
class Register extends React.Component {
  render() {
    return (
       <>
        <Nav/>
        <RegisterComponent />
        </>
    );
  }
}
export default Register;
