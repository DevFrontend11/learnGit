import { createStore, combineReducers } from "redux";
import counterReducer from "./counter";

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(reducer);
