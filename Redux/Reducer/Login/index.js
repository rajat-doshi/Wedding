const initState = {
  user_login: { login: false },
};

export default function (state = initState, action) {
  switch (action.type) {
    case "log_in":
      return { login: true, ...action.payload };
      break;
    case "log_out":
      return { login: false, ...action.payload };
      break;
    default:
      return state;
  }
}
