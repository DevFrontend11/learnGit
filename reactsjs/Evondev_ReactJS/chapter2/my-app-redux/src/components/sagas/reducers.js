import { combineReducers } from "redux";
import newSlice from "./news/newSlice";
export const reducer = combineReducers({
  news: newSlice,
});
