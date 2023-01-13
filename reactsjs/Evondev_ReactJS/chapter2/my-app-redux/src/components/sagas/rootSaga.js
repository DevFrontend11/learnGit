import { all, fork } from "redux-saga/effects";
import newSaga from "./news/saga";

export default function* rootSage() {
  yield all([fork(newSaga)]);
}
