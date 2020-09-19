import { React } from "../../util/module_store";
import Head from "../../components/head";
import Nav from "../../components/nav";
import ProfileListComponent from "./UserList/index";
export default class Search extends React.Component {
  static getInitialProps({ pathname }) {
    return { pathname };
  }
  render() {
    return (
      <React.Fragment>
        <Head title="User  List" />
        <Nav />
        <ProfileListComponent />
      </React.Fragment>
    );
  }
}
