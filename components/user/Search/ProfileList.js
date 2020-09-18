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
            <h3 id="recent-jobs" class="section-title">
              RECENTLY POSTED <span>PROFILES</span>
            </h3>

            <div class="post-jobs-filter">
              <div class="row no-gutters align-items-center">
                <div class="col-8 col-md-6 col-xl-4">
                  <div class="row no-gutters">
                    <div class="col-12 col-md-6">
                      <div class="post-jobs-filter-select first">
                        <div class="select-title">RELIGION</div>
                        <div class="select-value">
                          <select name="" class="select-field">
                            <option value="1">Show All</option>
                            {Religion.map((res) => {
                              return (
                                <option value={res.value}>{res.label}</option>
                              );
                            })}
                          </select>
                        </div>
                        <span class="icon icon-down"></span>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="post-jobs-filter-select">
                        <div class="select-title">SORT BY</div>
                        <div class="select-value">
                          <select name="" class="select-field">
                            <option value="1">Most Recent</option>
                            <option value="2">Oldest</option>
                            <option value="3">Last Week</option>
                            <option value="4">Last Month</option>
                          </select>
                        </div>
                        <span class="icon icon-down"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 col-md-6 col-xl-8 text-right">
                  <div class="post-jobs-filter-view-list">
                    <a
                      href="#"
                      class="view-list-type active"
                      data-list-type="list"
                    >
                      <span class="icon icon-view-list"></span>
                    </a>
                    <a href="#" class="view-list-type" data-list-type="grid">
                      <span class="icon icon-nine-squares"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                          <div class="col-12 col-md-5">
                            <div class="item-position">
                              <span class="icon icon-pin"></span>
                              <span class="position-text">{res.address}</span>
                            </div>
                          </div>

                          <div class="col-12 col-md-3">
                            <div class="item-time-type">
                              <span class="icon icon-tag-black-shape"></span>

                              <span class="type-text">
                                {DateDiff(res.create_date, "days")} Yrs.
                              </span>
                            </div>
                          </div>

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

            <div class="post-job-grid-view">
              <div class="row">
                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo4.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Senior UX Manager</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>DETAILS</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">LONDON, LONDON</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo5.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html#">WordPress Developer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>APPLY</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">NEW YORK, NY</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo3.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Full Stack Engineer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>APPLY</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">REMOTE</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo2.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Front End Developer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="#" title="" class="button-outline">
                      <span>DETAILS</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">BERLIN, GERMANY</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo1.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">HTML/CSS Specialist</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>APPLY</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">TOKYO, JAPAN</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo6.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Support Engineer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>DETAILS</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">BOSTON, MA</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo4.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Account Manager</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>DETAILS</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">LONDON, LONDON</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo5.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">Product Designer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>DETAILS</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">REMOTE</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-xl-4">
                  <div class="grid-view-item">
                    <img
                      src="/static/images/logo/logo3.png"
                      alt=""
                      class="item-img"
                    />
                    <div class="item-date">2 days ago</div>
                    <h4 class="item-post-title">
                      <a href="job.html">System Engineer</a>
                    </h4>
                    <h5 class="item-company-name">Envato Element Ltd</h5>
                    <a href="job.html" title="" class="button-outline">
                      <span>APPLY</span>
                    </a>
                    <div class="row no-gutters">
                      <div class="col-12 col-md-7 text-left">
                        <span class="icon icon-pin"></span>
                        <span class="item-position">WASHINGTON, DC</span>
                      </div>
                      <div class="col-12 col-md-5 text-left text-md-right">
                        <span class="icon icon-tag-black-shape"></span>
                        <span class="item-time-type">FULL TIME</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-4 text-center">
                <a href="#" class="button-fill post-job-more">
                  VIEW ALL PROFILES
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ProfileListComponent;
