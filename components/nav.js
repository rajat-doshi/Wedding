import React, { useEffect } from "react";
import Link from "next/link";
import { public_url } from "../util/constant";
import { connect } from "react-redux";
import { postUserDetailById } from "../util/Services/UserMaster";
import { ActionLogin, ActionLogout } from "../Redux/Action/Login/index";
import Router from "next/router";
const Nav = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      postUserDetailById({ _id: localStorage.getItem("token") }).then((res) => {
        if (res.error) {
          return;
        }
        if (res.data.error) {
        } else {
          props.ActionLogin(res.data.data);
        }
      });
    }
  }, []);
  const Logout = () => {
    localStorage.setItem("token", "");
    Router.push("/");
    props.ActionLogout({});
  };
  const RouteChange = (url) => {
    Router.push(url);
  };

  return (
    <header class="container-header">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-4 col-md-1 col-xl-2">
            <div class="header-logo">
              <h1>
                <a href="home.html" class="logo-link">
                  <img src="/static/images/logo/logo-lifeline.png" alt="" />
                  <span>Life Line</span>
                </a>
              </h1>
            </div>
          </div>
          <div class="col-8 col-md-11 col-xl-10 text-right">
            <nav class="header-nav">
              <ul>
                <li>
                  <a href="home.html" class="header-nav-link">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="companies.html" class="header-nav-link">
                    Find Partner
                  </a>
                </li>
                <li>
                  <a href="#recent-jobs" class="header-nav-link">
                    Search By Category
                  </a>
                </li>
                <li>
                <Link href={"/login"}>
                  <a href="Javascript:Void(0)" class="header-nav-link">
                    Login
                  </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <Link href={"/register"} class="header-link-action">
              <a href="#" class="header-link-action">
                <span>Registration</span>
              </a>
            </Link>
            <span class="icon icon-menu menu-mobile"></span>
          </div>
        </div>
      </div>
    </header>
  );
  return (
    <header class="header-area">
      <div class="top-header-area">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-5">
              <div class="top-header-content">
                <p>Welcome to matrimonial</p>
              </div>
            </div>
            <div class="col-7">
              <div class="top-header-content text-right">
                <p>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Mon-Sat: 8.00
                  to 17.00 <span class="mx-2"></span> |{" "}
                  <span class="mx-2"></span>{" "}
                  <i class="fa fa-phone" aria-hidden="true"></i> Call us:
                  (+12)-345-6789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-area">
        <div class="classy-nav-container breakpoint-off">
          <div class="container">
            <nav class="classy-navbar justify-content-between" id="akameNav">
              <a class="nav-brand" href="index.html">
                <img src="./img/core-img/logo.png" alt="" />
              </a>
              <div class="classy-navbar-toggler">
                <span class="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div class="classy-menu">
                <div class="classycloseIcon">
                  <div class="cross-wrap">
                    <span class="top"></span>
                    <span class="bottom"></span>
                  </div>
                </div>

                <div class="classynav">
                  <ul id="nav">
                    <li class="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="dropdown">
                        <li>
                          <a href="./index.html">- Home</a>
                        </li>
                        <li>
                          <a href="./about.html">- About Us</a>
                        </li>
                        <li>
                          <a href="./service.html">- Services</a>
                        </li>
                        <li>
                          <a href="./portfolio.html">- Portfolio</a>
                        </li>
                        <li>
                          <a href="./blog.html">- Blog</a>
                        </li>
                        <li>
                          <a href="./single-blog.html">- Blog Details</a>
                        </li>
                        <li>
                          <a href="./contact.html">- Contact</a>
                        </li>
                        <li>
                          <a href="#">- Dropdown</a>
                          <ul class="dropdown">
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href={public_url.members}>Members</Link>
                    </li>
                    <li>
                      <Link href={public_url.contact_us}>Contact</Link>
                    </li>
                    <li>
                      {!props.Login.login ? (
                        <>
                          <div class="book-now-btn ml-5 mt-4 mt-lg-0 ml-md-4">
                            <Link href={"/register"} class="btn akame-btn">
                              Register Now
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            class="book-now-btn ml-5 mt-4 mt-lg-0 ml-md-4"
                            onClick={() => {
                              RouteChange("/user/profile/view");
                            }}
                          >
                            {props.Login.fisrt_name} {props.Login.last_name}
                          </div>
                        </>
                      )}
                      <ul class="dropdown">
                        <li>
                          <Link href="/user/profile/view">View Profile</Link>
                        </li>
                        <li>
                          <Link href="/user/profile/edit">Edit profile</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {!props.Login.login ? (
                    <div class="book-now-btn ml-5 mt-4 mt-lg-0 ml-md-4">
                      <Link href={"/login"} class="btn akame-btn">
                        Login
                      </Link>
                    </div>
                  ) : (
                    <>
                      <div class="cart-icon ml-5 mt-4 mt-lg-0">
                        <a href="#">
                          <i class="fas fa-sign-out"></i>
                        </a>
                      </div>
                      <div
                        class="book-now-btn ml-5 mt-4 mt-lg-0 ml-md-4"
                        onClick={Logout}
                      >
                        Logout
                      </div>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect((state) => state, { ActionLogin, ActionLogout })(Nav);
