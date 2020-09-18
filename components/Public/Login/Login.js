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
    let formData = new FormData();
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
          props.ActionLogin(res.data.data);
          localStorage.setItem("token", res.data.data._id);
          ts(res.data.message);
        }
        state.loading = false;
        setState({ ...state });
      });
    }
  };

  return (
    <>
    <div class="login-form form-main">
      <div className="container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="row mt-2">
            <div className="col-lg-12">
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
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
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
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <button
                className="btn btn-primary form-control"
                type="submit"
                disabled={state.loading}
              >
                {state.loading ? "Please wait..." : "Login"}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <br/>
             <Link href="/forgot-password"> Forgot password</Link>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default connect((state) => state, { ActionLogin })(LoginComponent);
