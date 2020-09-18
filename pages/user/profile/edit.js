import React, { useState, useEffect } from "react";
import Head from "../../../components/head";
import Nav from "../../../components/nav";
import { Input, Select, TextArea } from "../../../components/Common";
import { cloneDeep } from "lodash";
import { getFormDetails } from "../../../util/helper";
import { te, ts } from "../../../util/ReduxToaster";
import {
  postProfileUpdate,
  postProfilePhotoUpload,
} from "../../../util/Services/UserMaster";
import {
  HeightDropDown,
  Occuption,
  MarriedUnmarriedBrotherSister,
  Weight,
  Height,
} from "../../../util/constant";
import { connect } from "react-redux";

const initState = {
  form: {
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
    job_profile:"",
    errors: {
      fisrt_name: null,
      last_name: null,
      height: null,
      weight: null,
      occuption: null,
      income: null,
      father_job_profile: null,
      job_profile:null,
      father_name: null,
      mother_name: null,
      father_occuption: null,
      father_income: null,
      mother_name: null,
      mother_occuption: null,
      mother_income: null,
      mother_job_profile: null,
      married_brother: null,
      unmarried_brother: null,
      married_sister: null,
      unmarried_sister: null,
      zipcode: null,
      address: null,
      father_job_profile: null,
    },
  },
  loading: false,
};
const Edit = (props) => {
  const [state, setState] = useState(cloneDeep(initState));
  let { form } = state;

  useEffect(() => {
    let newDefaults = _.assign(state.form, props.Login);
    state.form = newDefaults;
    setState({ ...state });
  }, [props.Login]);
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
      postProfileUpdate({ _id: localStorage.getItem("token"), ...obj }).then(
        (res) => {
          if (res.error) {
            state.loading = false;
            setState({ ...state });
            return;
          }
          if (res.data.error) {
            te(res.data.message);
          } else {
            ts(res.data.message);
          }
          state.loading = false;
          setState({ ...state });
        }
      );
    }
  };
  const ProfileImageUpload = (e) => {
    let formData = new FormData();

    formData.append("profile_picture", e.target.files[0]);
    formData.append("_id", localStorage.getItem("token"));
    postProfilePhotoUpload(formData).then((res) => {
      if (res.error) {
        return;
      }

      if (res.data.error) {
        te(res.data.message);
      } else {
        ts(res.data.message);
      }
    });
  };

  return (
    <>
      <Head /> <Nav />
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <input
                type="file"
                name="profile_image"
                onChange={ProfileImageUpload}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="First Name"
                title="First Name"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.fisrt_name}
                error={form.errors.fisrt_name}
                isReq={true}
                name="fisrt_name"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Last Name"
                title="Last Name"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.last_name}
                error={form.errors.last_name}
                isReq={true}
                name="last_name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Select
                options={Height()}
                className="form-control"
                title="Height"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.height}
                error={form.errors.height}
                isReq={true}
                name="height"
              />
            </div>
            <div className="col-lg-6">
              <Select
                options={Weight()}
                className="form-control"
                placeholder="Weight"
                title="Weight"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.weight}
                error={form.errors.weight}
                isReq={true}
                name="weight"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Select
                options={Occuption}
                className="form-control"
                placeholder="Occuption"
                title="Occuption"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.occuption}
                error={form.errors.occuption}
                isReq={true}
                name="occuption"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Job Profile"
                title="Job Profile"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.job_profile}
                error={form.errors.job_profile}
                isReq={true}
                name="job_profile"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Income"
                title="Income"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.income}
                error={form.errors.income}
                isReq={true}
                name="income"
                type="number"
                type="number"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Father Name"
                title="Father Name"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.father_name}
                error={form.errors.father_name}
                isReq={true}
                name="father_name"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Last Name"
                title="Last Name"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.last_name}
                error={form.errors.last_name}
                isReq={true}
                name="last_name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Select
                options={Occuption}
                className="form-control"
                placeholder="Father Occuption"
                title="Father Occuption"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.father_occuption}
                error={form.errors.father_occuption}
                isReq={true}
                name="father_occuption"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Job Profile"
                title="Job Profile"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.father_job_profile}
                error={form.errors.father_job_profile}
                isReq={true}
                name="father_job_profile"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Income"
                title="Income"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.father_income}
                error={form.errors.father_income}
                isReq={true}
                name="father_income"
                type="number"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Mother Name"
                title="Mother Name"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.mother_name}
                error={form.errors.mother_name}
                isReq={true}
                name="mother_name"
              />
            </div>
            <div className="col-lg-6">
              <Select
                options={Occuption}
                className="form-control"
                placeholder="Mother Occuption"
                title="Mother Occuption"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.mother_occuption}
                error={form.errors.mother_occuption}
                isReq={true}
                name="mother_occuption"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Income"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.mother_income}
                error={form.errors.mother_income}
                isReq={true}
                name="mother_income"
                type="number"
              />
            </div>
            <div className="col-lg-6">
              <Input
                className="form-control"
                placeholder="Job Profile"
                title="Job Profile"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.mother_job_profile}
                error={form.errors.mother_job_profile}
                isReq={true}
                name="mother_job_profile"
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <Select
                className="form-control"
                title="Married Brother"
                options={MarriedUnmarriedBrotherSister}
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.married_brother}
                error={form.errors.married_brother}
                isReq={true}
                name="married_brother"
              />
            </div>
            <div className="col-lg-6">
              <Select
                className="form-control"
                title="UnMarried Brother"
                options={MarriedUnmarriedBrotherSister}
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                value={form.unmarried_brother}
                error={form.errors.unmarried_brother}
                isReq={true}
                name="unmarried_brother"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Select
                className="form-control"
                title="Married Sister"
                options={MarriedUnmarriedBrotherSister}
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                value={form.married_sister}
                error={form.errors.married_sister}
                isReq={true}
                name="married_sister"
              />
            </div>
            <div className="col-lg-6">
              <Select
                className="form-control"
                title="UnMarried Sister"
                options={MarriedUnmarriedBrotherSister}
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                value={form.unmarried_sister}
                error={form.errors.unmarried_sister}
                isReq={true}
                name="unmarried_sister"
              />
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-lg-4">
              <Input
                className="form-control"
                placeholder="Zipcode"
                title="Zipcode"
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                name=""
                value={form.zipcode}
                error={form.errors.zipcode}
                isReq={true}
                name="zipcode"
              />
            </div>
            <div className="col-lg-8">
              <TextArea
                placeholder="Address"
                name="address"
                value={form.address}
                onChangeFunc={onInputChange}
                validationFunc={onInputValidate}
                error={form.errors.address}
                isReq={true}
                title="Address"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button
                className="btn btn-primary form-control"
                disabled={state.loading}
              >
                {state.loading ? "Please wait..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect((state) => state, {})(Edit);
