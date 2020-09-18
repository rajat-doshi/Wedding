import { post } from "./httpIntercepter";
export const Register = (objBody = {}) => {
  return post("/add-user", objBody).then((res) => {
    return res;
  });
};
