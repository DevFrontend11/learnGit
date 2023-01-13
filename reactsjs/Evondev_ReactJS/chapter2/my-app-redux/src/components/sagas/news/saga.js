import { takeLatest } from "redux-saga/effects";
import handleGetNews from "./handles";
import { getNews } from "./newSlice";

export default function* newSaga() {
  yield takeLatest(getNews.type, handleGetNews);
}
