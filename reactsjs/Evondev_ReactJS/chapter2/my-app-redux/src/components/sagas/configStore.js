import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import newSaga from "./news/saga";
import { reducer } from "./reducers";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleWare),
});
//pass MySaga
sagaMiddleWare.run(newSaga);
export default store;
