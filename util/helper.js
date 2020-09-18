import { cloneDeep } from "lodash";
import moment from "moment";
export const getFormDetails = (form, changeValidation) => {
  let failed;
  for (let val in form.errors) {
    const fieldError = form.errors[val];
    if (fieldError) {
      failed = true;
    } else if (fieldError === null && !form[val]) {
      failed = true;
      changeValidation(val, true);
    }
  }
  if (failed) {
    return false;
  } else {
    const cloneObj = cloneDeep(form);
    delete cloneObj["errors"];
    return cloneObj;
  }
};
export const DateDiff = function calculate_age(dob, diffType) {
  var dateOne = moment([
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]);
  var dateTwo = moment([
    new Date(dob).getFullYear(),
    new Date(dob).getMonth(),
    new Date(dob).getDate(),
  ]);
  let result = dateOne.diff(dateTwo, diffType);
  return result;
};
export const getRegExp = (type) => {
  switch (type) {
    case "mobile10":
      return /^\d{10}$/;
      break;
    case "email":
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      break;
  }
};
