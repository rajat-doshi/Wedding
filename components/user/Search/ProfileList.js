import { React } from "../../../util/module_store";
import { FileUrl } from "../../../util/Config";
import Router from "next/router";
import { DateDiff } from "../../../util/helper";
import { Religion } from "../../../util/constant";
class ProfileListComponent extends React.Component {
  constructor() {
    super();
  }
  ViewProfile = (id) => {
    Router.push(`/user/profile/view?id=${id}`);
  };
  render() {
    const { userList, loading } = this.props;
    return (
      <React.Fragment>
        <div class="container-post-jobs">
          <div class="container">
            {loading && <h3>Loading...</h3>}
            {userList.map((res) => {
              return (
                <div class="post-job-list-view">
                  <div class="list-view-item">
                    <div class="row align-items-center no-gutters">
                      <div class="col-12 col-md-4 col-xl-6">
                        <div class="item-post-job">
                          <img
                            src={FileUrl + res.profile_picture}
                            alt=""
                            class="item-logo"
                          />
                          <div class="item-post">
                            <h4 class="post-name">
                              <a href="job.html">{res.fisrt_name}</a>
                            </h4>
                            <span class="post-date">
                              {DateDiff(res.create_date, "days")} days ago
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-8 col-xl-6">
                        <div class="row no-gutters">
                          {res.city && res.state && (
                            <div class="col-12 col-md-5">
                              <div class="item-position">
                                <span class="icon icon-pin"></span>
                                <span class="position-text">
                                  {res.city},{res.state}
                                </span>
                              </div>
                            </div>
                          )}

                          {res.birth_date && (
                            <div class="col-12 col-md-3">
                              <div class="item-time-type">
                                <span class="icon icon-tag-black-shape"></span>

                                <span class="type-text">
                                  {DateDiff(res.birth_date, "days")} Yrs.
                                </span>
                              </div>
                            </div>
                          )}

                          <div
                            class="col-12 col-md-4 text-sm-center text-md-right"
                            onClick={() => {
                              this.ViewProfile(res._id);
                            }}
                          >
                            <a href="Javascript:void()" class="button-outline">
                              <span>View Profile</span>
                            </a>
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
