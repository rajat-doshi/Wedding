import React, { useEffect } from "react";
import Link from "next/link";
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
                  <Link href="/">
                    <a href="javascript:void(0)" class="header-nav-link">
                      HOME
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/user" class="header-nav-link">
                    <a href="Javascript:void(0)" class="header-nav-link">
                      Find Partner
                    </a>
                  </Link>
                </li>
                <li>
                  {!props.Login.login ? (
                    <Link href="/login">
                      <a href="Javascript:Void(0)" class="header-nav-link">
                        Login
                      </a>
                    </Link>
                  ) : (
                    <a
                      href="Javascript:Void(0)"
                      class="header-nav-link"
                      onClick={Logout}
                    >
                      Logout
                    </a>
                  )}
                </li>
              </ul>
            </nav>
            {!props.Login.login ? (
              <Link href={"/register"} class="header-link-action">
                <a href="Javascript:void(0)" class="header-link-action">
                  <span>Registration</span>
                </a>
              </Link>
            ) : (
              <a
                href="Javascript:void(0)"
                class="header-link-action"
                onClick={() => {
                  RouteChange("/user/profile/view");
                }}
              >
                <span>
                  {" "}
                  {props.Login.fisrt_name} {props.Login.last_name}
                </span>
              </a>
            )}
            <span class="icon icon-menu menu-mobile"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect((state) => state, { ActionLogin, ActionLogout })(Nav);
