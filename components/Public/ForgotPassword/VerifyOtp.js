import React, { useEffect, useState } from "react";
import { Input } from "../../Common/index";
import { cloneDeep } from "lodash";
import { getFormDetails } from "../../../util/helper";
import { ts, te } from "../../../util/ReduxToaster";
import { postUserVerify } from "../../../util/Services/UserMaster";
import { withRouter } from "next/router";
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
const VerifyOtpComponent = (props) => {
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

    const { form, id } = state;

    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }

    if (obj) {
      state.loading = true;
      setState({ ...state });
      postUserVerify({
        otp: obj.otp,
        email_address: props.router.query["email-address"],
      }).then((res) => {
        if (res.error) {
          return;
        }
        if (res.data.error) {
          te(res.data.message);
        } else {
          localStorage.setItem("token", res.data.data.token);
          Router.push("/forgot-password/change-password");
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
                  placeholder="Please enter otp"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name="otp"
                  value={form.otp}
                  error={form.errors.otp}
                  title="Otp"
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
    </>
  );
};

export default connect((state) => state, { ActionLogin })(
  withRouter(VerifyOtpComponent)
);
