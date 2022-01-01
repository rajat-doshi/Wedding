import React, { useEffect, useState } from "react";
import { Input } from "../../Common/index";
import { withRouter } from "next/router";
import { cloneDeep } from "lodash";

import { getFormDetails } from "../../../util/helper";
import { ts, te } from "../../../util/ReduxToaster";

import { postUserVerify } from "../../../util/Services/UserMaster";
import { ActionLogin } from "../../../Redux/Action/Login/index";
import { connect } from "react-redux";
import Router from "next/router";

const initState = {
  form: {
    otp: "",
    errors: {
      otp: null,
    },
  },
  loading: false,
};
const UserVerifyComponent = (props) => {
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

    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }

    if (obj) {
      state.loading = true;
      setState({ ...state });
      console.log(window.location.search);
      const urlSearchParams = new URLSearchParams(window.location.search);
      const email_address = urlSearchParams.get('email-address')
      postUserVerify({
        email_address: email_address,
        otp: obj.otp,
      }).then((res) => {
        if (res.error) {
          return;
        }
        if (res.data.error) {
            
          te(res.data.message);
        } else {
            Router.push(`/login`)
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
                  placeholder="OTP"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name="otp"
                  value={form.otp}
                  error={form.errors.otp}
                  title="OTP"
                  maxLength="6"
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
                  {state.loading ? "Please wait..." : "Verify"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default connect((state) => state, { ActionLogin })(
  withRouter(UserVerifyComponent)
);
