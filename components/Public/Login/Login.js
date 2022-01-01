import React, { useEffect, useState } from "react";
import { Input } from "../../Common/index";
import Head from "../../head";
import { cloneDeep } from "lodash";
import withRedux from "next-redux-wrapper";
import makeStore from "../../../Redux/index";
import { getFormDetails } from "../../../util/helper";
import { ts, te } from "../../../util/ReduxToaster";
import Nav from "../../nav";
import { postLogin } from "../../../util/Services/UserMaster";
import { ActionLogin } from "../../../Redux/Action/Login/index";
import { connect } from "react-redux";
import Router from "next/router";
import Link from "next/link";
const initState = {
  form: {
    email_address: "",
    password: "",
    errors: {
      email_address: null,
      password: null,
    },
  },
  loading: false,
};
const LoginComponent = (props) => {
  const [state, setState] = useState(cloneDeep(initState));
  let { form } = state;

  // handle change event
  const onInputChange = (name, value, error = undefined) => {
    const { form } = state;
    form[name] = value;

    if (error !== undefined) {
      let { errors } = form;
      errors[name] = error;
    }
    setState({ form });
  };
  // handle validation
  const onInputValidate = (name, error) => {
    let { errors } = state.form;
    errors[name] = error;
    setState({ form: { ...state.form, errors: errors } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { history } = props;
    const { form, id } = state;
    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }
    if (obj) {
      state.loading = true;
      setState({ ...state });
      postLogin(obj).then((res) => {
        if (res.error) {
          return;
        }
        if (res.data.error) {
          te(res.data.message);
        } else {
          Router.push("/user");
          localStorage.setItem("token", res.data.data.token);
          ts(res.data.message);
        }
        state.loading = false;
        setState({ ...state });
      });
    }
  };

  return (
    <div class="container-blog-posts">
      <div class="container-awesome-company">
        <div class="container">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div class="row">
              <div class="col-12 ">
                <div class="small-form">
                  <h1
                    style={{
                      color: "#e66288",
                      fontSize: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    LOGIN HERE
                  </h1>
                  <div class="control-holder">
                    <Input
                      className="form-control"
                      placeholder="Email Address"
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      name="email_address"
                      value={form.email_address}
                      error={form.errors.email_address}
                      title="Email Address"
                    />
                  </div>
                  <div class="control-holder">
                    <Input
                      className="form-control"
                      placeholder="Password"
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      name="password"
                      value={form.password}
                      error={form.errors.password}
                      title="Password"
                    />
                  </div>
                  <div class="control-holder">
                    <label>
                      <input class="checkbox-1" type="checkbox" /> Remember Me
                    </label>
                  </div>
                  <div class="control-holder">
                    <label>
                      <Link href="/forgot-password"> Forgot password</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    class="search-job-form-button"
                    style={{
                      height: "51px",
                      backgroundImage:
                        "linear-gradient(90deg,#e44e78 0,#ce74ba)",
                      textAlign: "center",
                      padding: "0 17px",
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                      fontWeight: "700",
                      letterSpacing: "1.4px",
                      color: "#fff",
                      cursor: "pointer",
                      marginTop: "20px",
                    }}
                    disabled={state.loading}
                  >
                    {state.loading ? "Please wait..." : "LOGIN"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => state, { ActionLogin })(LoginComponent);
