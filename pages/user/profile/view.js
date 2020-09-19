import React, { useEffect, useState } from "react";
import Head from "../../../components/head";
import Footer from "../../../components/footer";
import Nav from "../../../components/nav";
import { withRouter } from "next/router";
import { postUserDetailById } from "../../../util/Services/UserMaster";
import { te, ts } from "../../../util/ReduxToaster";
import { cloneDeep } from "lodash";
import { FileUrl } from "../../../util/Config";
const initState = {
  user: {
    fisrt_name: "",
    last_name: "",
    height: "",
    weight: "",
    occuption: "",
    income: "",
    father_name: "",
    mother_name: "",
    father_occuption: "",
    father_income: "",
    mother_name: "",
    mother_occuption: "",
    mother_income: "",
    mother_job_profile: "",
    married_brother: "",
    unmarried_brother: "",
    married_sister: "",
    unmarried_sister: "",
    zipcode: "",
    address: "",
    father_job_profile: "",
    job_profile: "",
  },
  loading: false,
};
const UserProfile = (props) => {
  const [state, setState] = useState(cloneDeep(initState));
  useEffect(() => {
    state.loading = true;
    setState({ ...state });
    postUserDetailById({
      _id: props.router.query.id
        ? props.router.query.id
        : localStorage.getItem("token"),
    }).then((res) => {
      if (res.error) {
        return;
      }
      if (res.data.error) {
        te(res.data.message);
      } else {
        state.user = res.data.data;
        state.loading = false;
        setState({ ...state });
        ts(res.data.message);
      }
    });
  }, []);

  return (
    <>
      <Head />
      <Nav />
      <div class="container-job">
        <div class="job-header">
          <div class="container">
            <div class="row align-items-end no-gutters">
              <div class="col-12 col-md-7 col-lg-8">
                <h2 class="header-title">
                  <span class="title-company">
                    <span>28 Yrs, </span>Hindu
                  </span>
                  <span class="title-job-post">
                    {state.user.fisrt_name} {state.user.last_name}{" "}
                  </span>
                </h2>
                <div class="header-detail-info">
                  <span class="icon icon-pin"></span>
                  <span class="detail-info-title">{state.user.address}</span>
                </div>
                <div class="header-detail-info">
                  <span class="icon icon-tag-black-shape"></span>
                  <span class="detail-info-title">{state.user.occuption}</span>
                </div>
                <div class="header-detail-info">
                  <span class="icon icon-time"></span>
                  <span class="detail-info-title">{state.user.birth_date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="job-content">
                <img
                  class="profile-main"
                  src={FileUrl + state.user.profile_picture}
                />
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="job-detail-info">
                <div class="info-item">
                  <h5 class="item-title">POSTED BY</h5>
                  <span class="item-desc">
                    <a href="#" title="">
                      Mother
                    </a>
                  </span>
                </div>
                <div class="info-item">
                  <h5 class="item-title">POSTED ON</h5>
                  <span class="item-desc">December 01, 2018</span>
                </div>
                <div class="info-item">
                  <h5 class="item-title">PARTNER CHOICE</h5>
                  <span class="item-desc">
                    Working Govt./Private, Hindu decent family
                  </span>
                </div>
              </div>
              <div class="job-company-info">
                <div class="company-info-img">
                  <img src="images/logo/logo5.png" alt="" class="info-img" />
                </div>
                <div class="company-info-detail">
                  <h3 class="info-company-name">VIRGO</h3>
                  <div class="profile-social-connection">
                    <a href="#" title="" class="fa fa-facebook"></a>
                    <a href="#" title="" class="fa fa-instagram"></a>
                  </div>
                  <a href="#" title="" class="info-company-button">
                    GET CONNECTED
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(UserProfile);
