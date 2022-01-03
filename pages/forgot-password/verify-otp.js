import Head from "../../components/head";
import Nav from "../../components/nav";
import VerifyOtpComponent from "../../components/Public/ForgotPassword/VerifyOtp";
import {Provider} from "react-redux";
import store from "../../Redux"
export default function VerifyOtp() {
  return (
    <>
    <Provider store={store}>
      <Head />
      <Nav />
      <VerifyOtpComponent/>
      </Provider>
    </>
  );
}
