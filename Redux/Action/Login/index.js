export const ActionLogin = (obj) => {
  return { type: "log_in", payload: obj };
};

export const ActionLogout = ({}) => {
  return { type: "log_in", payload: {login:false} };
};
