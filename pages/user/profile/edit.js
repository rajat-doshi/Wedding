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
  postUserDetailById,
} from "../../../util/Services/UserMaster";
import {
  Gender,
  Occuption,
  MarriedUnmarriedBrotherSister,
  Weight,
  Height,
  Religion,
} from "../../../util/constant";
import { connect, Provider } from "react-redux";
import store from "../../../Redux/index";
import {userDetailsFields} from "../../../Constant/profileEdit";
const initState = {
  form: {
    first_name: "",
    last_name: "",
    height: "",
    weight: "",
    gender: "",
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
    birth_date: "",
    city: "",
    state: "",
    religion: "",
    errors: {
      first_name: null,
      last_name: null,
      height: null,
      gender: null,
      weight: null,
      occuption: null,
      income: null,
      father_job_profile: null,
      job_profile: null,
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
      birth_date: null,
      city: null,
      state: null,
      religion: null
    },
  },
  loading: false,
};
const Edit = (props) => {
  const [state, setState] = useState(cloneDeep(initState));
  let { form } = state;

  useEffect(() => {
    const { form } = state;
    postUserDetailById(
      {
        token: localStorage.getItem('token')
      }
    ).then(res => {
      if (res.data.error)
        return;
      if (res.data.data) {
        setState({ ...state, form: { ...form, ...res.data.data } });
      }
    })

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
    const newForm = { ...form };
    delete newForm.errors;
    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }
    if (true) {
      state.loading = true;
      setState({ ...state });
      postProfileUpdate({ token: localStorage.getItem("token"), ...newForm }).then(
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
    formData.append("token", localStorage.getItem("token"));
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
    
        
        <div className="container mt-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="file"
                  name="image"
                  onChange={ProfileImageUpload}
                />
              </div>
            </div>
            {userDetailsFields.map((res,index)=>{
              const {name} = res;
              if(index==userDetailsFields.length-1&&index+1%2==0)
              {return}
              const nextField = userDetailsFields[index+1]
              return(
                <>
              <div className="row">
                <div className="col-lg-6">
                    <Input
                    {...res}
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      value={form[name]}
                      error={form.errors[name]}
                    />
                  </div>
                  {nextField&&<div className="col-lg-6">
                    <Input
                      {...nextField}
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      value={form[nextField.name]}
                      error={form.errors[nextField.name]}
                    />
                  </div>}
              </div>
              </>                                                      
              )
            })}
            <div className="row">
              <div className="col-lg-6">
                <Input
                  className="form-control"
                  placeholder="Birth Date"
                  title="Birth Date"
                  type="date"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name=""
                  value={form.birth_date}
                  error={form.errors.birth_date}
                  isReq={true}
                  name="birth_date"
                />
              </div>
              <div className="col-lg-6">
                <Select
                  options={Gender}
                  className="form-control"
                  title="Gender"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name=""
                  value={form.gender}
                  error={form.errors.gender}
                  isReq={true}
                  name="gender"
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
                  options={Religion}
                  className="form-control"
                  placeholder="Religion"
                  title="Religion"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  name=""
                  value={form.religion}
                  error={form.errors.religion}
                  isReq={true}
                  name="religion"
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
              <div className="col-lg-6">
                <Input
                  className="form-control"
                  placeholder="City"
                  title="City"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  value={form.city}
                  error={form.errors.city}
                  isReq={true}
                  name="city"
                />
              </div>
              <div className="col-lg-6">
                <Input
                  className="form-control"
                  placeholder="State"
                  title="State"
                  onChangeFunc={onInputChange}
                  validationFunc={onInputValidate}
                  value={form.state}
                  error={form.errors.state}
                  isReq={true}
                  name="state"
                />
              </div>
            </div>
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

export default Edit;
