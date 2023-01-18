import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newSlice";
import requestGetNews from "./requests";
export default function* handleGetNews({ payload, action }) {
  let query = "";
  try {
    const newQuery = select((state) => state.news.query);
    newQuery === "" ? (query = "React") : (query = payload);
    yield put(setLoading(true));
    const response = yield call(requestGetNews, query);
    console.log(response);
    const { hits } = response.data;
    //update data in store
    yield put(setLoading(false));
    yield put(setNews(hits));
  } catch (error) {
    console.log(error.message);
  }
}
