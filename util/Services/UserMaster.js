import { post, get } from "./httpIntercepter";
export const getUserList = (limit = 0, page = 0, other_parameter = {}) => {
  let query = `/user-list?limit=${limit}&page=${page}`;
  if (other_parameter.from_age) {
    query = query + `&from_age=${other_parameter.from_age}`;
  }
  if (other_parameter.to_age) {
    query = query + `&to_age=${other_parameter.to_age}`;
  }
  if (other_parameter.religion) {
    query = query + `&religion=${other_parameter.religion}`;
  }
  if (other_parameter.gender) {
    query = query + `&gender=${other_parameter.gender}`;
  }
  return get(query).then((res) => {
    console.log("getUserList", res);
    return res;
  });
};
export const postLogin = (obj = {}) => {
  return post("/login", obj).then((res) => {
    console.log("postLogin", res);
    return res;
  });
};
export const postProfileUpdate = (obj = {}) => {
  return post(`/user-update`, obj).then((res) => {
    console.log("postProfileUpdate", res);
    return res;
  });
};
export const postUserDetailById = (obj = {}) => {
  return post(`/get-user-detail-by-id`, obj).then((res) => {
    console.log("postUserDetailById", res);
    return res;
  });
};

export const postProfilePhotoUpload = (obj = {}) => {
  return post(`/user-update`, obj).then((res) => {
    console.log("postProfilePhotoUpload", res);
    return res;
  });
};
export const postUserVerify = (obj = {}) => {
  return post(`/register-user-verification`, obj).then((res) => {
    console.log("postUserVerify", obj);
    return res;
  });
};
export const postForgotPassword = (obj = {}) => {
  return post(`/forgot-password`, obj).then((res) => {
    console.log("postForgotPassword", res);
    return res;
  });
};
export const postChangePassword = (obj = {}) => {
  return post("/change-password", obj).then((res) => {
    console.log("postChangePassword", res);
    return res;
  });
};
