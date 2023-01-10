import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  globalMode: globalSlice,
});
//redux middleWare
const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("action", action);
  delete action.payload;
  next(action);
};
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

//javascript observer pattern
store.subscribe(() => {
  console.log("current state: ", store.getState().counter.count);
});
store.dispatch(incrementByValue(3));
store.dispatch(incrementByValue(7));
store.dispatch(incrementByValue(8));
export default store;
