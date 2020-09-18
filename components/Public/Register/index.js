import React from "react";
import Input from "../../Common/Input";
import { TextArea, File } from "../../Common/index";
import { cloneDeep, toastr } from "../../../util/module_store";
import { getFormDetails } from "../../../util/helper";
import { Register } from "../../../util/Services/Register";
import withRedux from "next-redux-wrapper";
import makeStore from "../../../Redux/index";
import { te, ts } from "../../../util/ReduxToaster";
import  Router  from "next/router";

const formData = {
  fisrt_name: "",
  last_name: "",
  mobile_number: "",
  address: "",
  email_address: "",
  password: "",
  errors: {
    fisrt_name: null,
    last_name: null,
    address: null,
    mobile_number: null,
    email_address: null,
    password: null,
  },
};
class RegisterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      form: cloneDeep(formData),
    };
  }
  // handle change event
  onInputChange = (name, value, error = undefined) => {
    const { form } = this.state;
    form[name] = value;
    console.log(name, value);
    if (error !== undefined) {
      let { errors } = form;
      errors[name] = error;
    }
    this.setState({ form });
  };
  // handle validation
  onInputValidate = (name, error) => {
    let { errors } = this.state.form;
    errors[name] = error;
    this.setState({ form: { ...this.state.form, errors: errors } });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let formData = new FormData();
    const { form, id } = this.state;

    let obj = getFormDetails(form, this.onInputValidate);
    if (!obj) {
     te("Please Enter required field")
      return false;
    }
    this.setState({ loading: true });
    let objForm = cloneDeep(obj);
    delete objForm.errors;
    Register(obj).then((res) => {
      if (res.error) {
        this.setState({ loading: false });
        return;
      }
      if (!res.data.error) {
        Router.push(`/user-verify?email-address=${obj.email_address}`)
        ts(res.data.message);
      } else {
        te(res.data.message);
      }
      this.setState({ loading: false });
    });
  };

  render() {
    let { form, loading } = this.state;
    let { errors } = form;
    console.log("Data123", this.props);
    return (
      <React.Fragment>
        <div className="form-main">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="fisrt_name"
              value={form.fisrt_name}
              title="First Name"
              onChangeFunc={this.onInputChange}
              validationFunc={this.onInputValidate}
              error={errors.fisrt_name}
              isReq={true}
            />
            <Input
              name="last_name"
              value={form.last_name}
              title="Second Name"
              onChangeFunc={this.onInputChange}
              validationFunc={this.onInputValidate}
              error={errors.last_name}
              isReq={true}
            />
            <Input
              name="mobile_number"
              value={form.mobile_number}
              title="Mobile number"
              onChangeFunc={this.onInputChange}
              validationFunc={this.onInputValidate}
              error={errors.last_name}
              isReq={true}
              reqType="mobile10"
            />
            <Input
              name="email_address"
              value={form.email_address}
              title="Email Address"
              onChangeFunc={this.onInputChange}
              validationFunc={this.onInputValidate}
              error={errors.email_address}
              isReq={true}
              reqType="email"
            />
            <TextArea
              name="address"
              value={form.address}
              title="Address"
              onChangeFunc={this.onInputChange}
              validationFunc={(name, err) => {
                console.log(name, err);
                this.onInputValidate();
              }}
              error={errors.address}
            />
            <Input
              name="password"
              value={form.password}
              title="Password"
              onChangeFunc={this.onInputChange}
              validationFunc={this.onInputValidate}
              isReq={true}
              error={errors.password}
            />
            <button
              className="form-control btn-primary mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
RegisterComponent.getInitialProps = ({ store, isServer, pathname, query }) => {
  // component will read from store's state when rendered
  store.dispatch({ type: "FOO", payload: "foo" });
  // pass some custom props to component from here
  return { custom: "custom" };
};
export default withRedux(makeStore, (state) => state)(RegisterComponent);
