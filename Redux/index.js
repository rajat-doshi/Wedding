import rootReducer from "./Reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
const makeStore = (initialState) => {
  return createStore(rootReducer, composeWithDevTools());
};
export default makeStore;
