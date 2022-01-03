import React, { useEffect, useState } from "react";
import { Input } from "../../Common/index";
import { cloneDeep } from "lodash";
import { getFormDetails } from "../../../util/helper";
import { ts, te } from "../../../util/ReduxToaster";
import { postChangePassword } from "../../../util/Services/UserMaster";
import { withRouter } from "next/router";
import { ActionLogin } from "../../../Redux/Action/Login/index";
import { connect } from "react-redux";
import Router from "next/router";
import {Provider} from "react-redux";
import store from "../../../Redux/index"
const initState = {
  form: {
    password: "",
    conifrm_password: "",
    errors: {
      password: null,
      conifrm_password: null,
    },
  },
  loading: false,
};
const ChangePassword = (props) => {
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
    const { form } = state;
    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }
    if (obj) {
      state.loading = true;
      setState({ ...state });
      postChangePassword({
        token: localStorage.getItem("token"),
        password: obj.password,
      }).then((res) => {
        if (res.error) {
          return;
        }
        if (res.data.error) {
          te(res.data.message);
        } else {
          localStorage.setItem("token", "");
          Router.push("/login");
          ts(res.data.message);
        }
        state.loading = false;
        setState({ ...state });
      });
    }
  };

  return (
    <>
    <Provider store={store}>
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
                  placeholder="Please enter password"
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
                <Input
                  className="form-control"
                  placeholder="Please enter conifrm password"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name="conifrm_password"
                  value={form.conifrm_password}
                  error={form.errors.conifrm_password}
                  title="Conifrm password"
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
                  {state.loading ? "Please wait..." : "Sent otp"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </Provider>
    </>
  );
};

export default connect((state) => state, { ActionLogin })(
  withRouter(ChangePassword)
);
