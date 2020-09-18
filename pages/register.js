import React from "react";
import Nav from "../components/nav";

import { RegisterComponent } from "../components/Public";
import Head from "../components/head";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head title="Register Form" />
        <Nav />
        <RegisterComponent />
      </React.Fragment>
    );
  }
}
export default Register;
