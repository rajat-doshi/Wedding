import Head from "../../components/head";
import Nav from "../../components/nav";
import ForgotPasswordComponent from "../../components/Public/ForgotPassword";
import {Provider} from "react-redux";
import store from "../../Redux"
export default function ForgotPassword() {
  return (
    <>
    <Provider store={store}>
      <Head />
      <Nav />
     <ForgotPasswordComponent/>
     </Provider>
    </>
  );
}
