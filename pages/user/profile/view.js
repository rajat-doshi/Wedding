import React, { useEffect, useState } from "react";
import Head from "../../../components/head";
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
};
const UserProfile = (props) => {
  const [state, setState] = useState(cloneDeep(initState));
  useEffect(() => {
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
                  <span class="detail-info-title">2 DAYS AGO</span>
                </div>
              </div>
              <div class="col-12 col-md-5 col-lg-4 text-md-right">
                <a href="#" title="" class="button-outline like-button">
                  <span class="icon icon-dislike"></span>
                </a>
                <a href="#" title="" class="button-fill job-apply">
                  CHAT NOW
                </a>
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
                <h3 class="section-title job-content-title">
                  MY <span>BIO</span>
                </h3>
                <p>
                  Shikha has completed her articleship with Singh Sharma & Ray
                  CO(CA & LAW Firm) which is in Delhi and she is currently
                  working there to gain more Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
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
            {/* <!-- Jobs Categories --> */}
            <div class="container-jobs-category no-padding width-100">
              <div class="container">
                <h3 class="section-title text-left">
                  Me in <span>Pictures</span>
                </h3>
                <div class="jobs-category-carousel owl-carousel">
                  <div class="item">
                    <a href="#" class="item-link">
                      <div class="item-img">
                        <img src="images/profile/user1/gallery-1.jpg" />
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item-link">
                      <div class="item-img">
                        <img src="images/profile/user1/gallery-2.jpg" />
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item-link">
                      <div class="item-img">
                        <img src="images/profile/user1/gallery-3.jpg" />
                      </div>
                    </a>
                  </div>
                  <div class="item">
                    <a href="#" class="item-link">
                      <div class="item-img">
                        <img src="images/profile/user1/gallery-4.jpg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-margin-top">
            <a href="#" title="" class="button-outline like-button">
              <span class="icon icon-dislike"></span>
            </a>
            <a href="#" title="" class="button-fill job-apply">
              APPLY NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      {" "}
      <Head />
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              height="300"
              width="300"
              src={FileUrl + state.user.profile_picture}
            />
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <h5>
                  {state.user.fisrt_name} {state.user.last_name}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Occuption</h5>
              </div>
              <div className="col-lg-6">
                <h5>
                  ({state.user.occuption}) {state.user.job_profile}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Mobile number</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.mobile_number}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Income</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.income} lac</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Height</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.height} feet</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Weight</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.weight} KG</h5>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4">
                <h5>Father Name</h5>
              </div>
              <div className="col-lg-4">
                <h5>
                  {state.user.father_name} {state.user.last_name}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Occuption</h5>
              </div>
              <div className="col-lg-4">
                <h5>
                  ({state.user.occuption}) {state.user.father_job_profile}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Income</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.father_income} lac</h5>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4">
                <h5>Mother Name</h5>
              </div>
              <div className="col-lg-4">
                <h5>Krishna Doshi</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Occuption</h5>
              </div>
              <div className="col-lg-4">
                <h5>
                  ({state.user.occuption}) {state.user.mother_job_profile}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Income</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.mother_income} lac</h5>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4">
                <h5>Married Brothers</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.married_brother}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Unmarried Brothers</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.unmarried_brother}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Married Sisters</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.married_sister}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Unmarried Sisters</h5>
              </div>
              <div className="col-lg-4">
                <h5>{state.user.unmarried_sister}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h5>Address</h5>
              </div>
              <div className="col-lg-4">
                <h5>
                  {state.user.address} (Pincode :) {state.user.zipcode}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(UserProfile);
