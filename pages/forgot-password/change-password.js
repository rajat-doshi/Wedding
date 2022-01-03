import Head from "../../components/head";
import Nav from "../../components/nav";
import ChangePasswordComponent from "../../components/Public/ForgotPassword/ChangePassword";
import {Provider} from "react-redux";
import store from "../../Redux"
export default function ChangePassword() {
  return (
    <Provider store={store}>
      <Head />
      <Nav />
      <ChangePasswordComponent />
      </Provider>
  );
}
