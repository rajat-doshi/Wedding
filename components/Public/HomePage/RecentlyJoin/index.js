import React, { useState, useEffect } from "react";
import { getUserList } from "../../../../util/Services/UserMaster";
import { Religion } from "../../../../util/constant";
import { DateDiff } from "../../../../util/helper";
import { FileUrl } from "../../../../util/Config";
import { connect } from "react-redux";
import Link from "next/link";
const RecentlyJoin = (props) => {
  const [state, setState] = useState({ userList: [] });
  const { userList, loading } = state;
  const { Login } = props;
  useEffect(() => {
    GetUserList();
  }, []);
  const GetUserList = (page = 1, other_parameter = {}) => {
    state.loading = true;
    setState({ ...state });
    getUserList(5, page, other_parameter).then((res) => {
      if (!res.data) {
        return
      } else {
        state.userList = res.data.data.records;
        state.loading = false;
        setState({
          ...state,
        });
      }
    });
  };
  return (
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
                          <option value={res.value}>{res.label}</option>;
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
          </div>
        </div>
        {loading && (
          <div class="">
            <div class="list-view-item">
              <div class="row align-items-center">
                <div class="col-12 col-md-4 col-xl-6">
                  <h3>Loading...</h3>
                </div>
              </div>
            </div>
          </div>
        )}
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
                          {DateDiff(res.create_date)}
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
                              {DateDiff(res.birth_date)} Yrs.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div class="row">
          <div class="col-12 col-md-6 offset-md-3 col-xl-4 offset-xl-4 text-center">
            <Link href={!Login._id ? `/login` : "/user"}>
              <a href="Javascript:void(0)" class="button-fill post-job-more">
                VIEW ALL PROFILES
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state, {})(RecentlyJoin);
