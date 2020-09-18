import { React } from "../../../util/module_store";
import Filter from "./Filter/index";
import { getUserList } from "../../../util/Services/UserMaster";
import { FileUrl } from "../../../util/Config";
import Router from "next/router";
import Pagination from "../../../components/Common/Pagination";
import ProfileListComponent from "../../../components/user/Search/ProfileList";

class ProfileListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserList: [],
      total_record: 0,
      active: 1,
      limit: 1,
      loading: false,
    };
  }
  static getInitialProps({ pathname }) {
    return { pathname };
  }
  GetUserList = (page = 1, other_parameter = {}) => {
    this.setState({ loading: true });
    getUserList(this.state.limit, page, other_parameter).then((res) => {
      if (res.data.error) {
      } else {
        this.setState({
          UserList: res.data.data.records,
          total_record: res.data.data.total_record,
          loading: false,
          active: page,
        });
      }
    });
  };
  componentDidMount() {
    this.GetUserList();
  }
  ViewProfile = (id) => {
    Router.push(`/user/profile/view?id=${id}`);
  };
  PageChange = (page) => {
    this.GetUserList(page);
  };
  render() {
    let { UserList, loading } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-lg-12">
            <ProfileListComponent loading={loading} userList={UserList} />
            <Pagination
              total_record={this.state.total_record}
              active={this.state.active}
              onClick={(page) => {
                this.PageChange(page);
              }}
              limit={this.state.limit}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ProfileListPage;
