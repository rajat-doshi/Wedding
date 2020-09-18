import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import Login from "./Login/index";
export default combineReducers({
  toastr: toastrReducer,
  Login: Login,
});
