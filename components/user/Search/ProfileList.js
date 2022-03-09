import { React } from "../../../util/module_store";
import { FileUrl } from "../../../util/Config";
import Router from "next/router";
import Link from "next/link";
import { DateDiff } from "../../../util/helper";
import { Religion } from "../../../util/constant";
class ProfileListComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { userList, loading } = this.props;
    return (
      <React.Fragment>
        <div class="container-post-jobs">
          <div class="container">
            {loading && <h3>Loading...</h3>}
            {userList.map((user) => {
              return (
                <div class="post-job-list-view">
                  <div class="list-view-item">
                    <div class="row align-items-center no-gutters">
                      <div class="col-12 col-md-4 col-xl-6">
                        <div class="item-post-job">
                            <img
                            src={FileUrl+user.profile_picture}
                            alt={user.first_name}
                            class="item-logo"
                          />
                          <div class="item-post">
                            <h4 class="post-name">
                              <a href="job.html">{user.first_name}</a>
                            </h4>
                            <span class="post-date">
                              {DateDiff(user.create_date, "days")} days ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-8 col-xl-6">
                        <div class="row no-gutters">
                          {user.city && user.state && (
                            <div class="col-12 col-md-5">
                              <div class="item-position">
                                <span class="icon icon-pin"></span>
                                <span class="position-text">
                                  {user.city},{user.state}
                                </span>
                              </div>
                            </div>
                          )}
                          {user.birth_date && (
                            <div class="col-12 col-md-3">
                              <div class="item-time-type">
                                <span class="icon icon-tag-black-shape"></span>
                                <span class="type-text">
                                  {DateDiff(user.birth_date, "days")} Yrs.
                                </span>
                              </div>
                            </div>
                          )}
                          <div
                            class="col-12 col-md-4 text-sm-center text-md-right"                      
                          >
                            <Link href={{ pathname: `/user/profile/view`, query: { id: user.id } }} class="button-outline">
                              <span>View Profile</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProfileListComponent;
