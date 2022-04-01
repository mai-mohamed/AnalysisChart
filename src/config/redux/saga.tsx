import { all } from "redux-saga/effects";
import { authSaga } from "../../modules/lessons/redux/saga";

export function* watchSagas() {
  yield all([authSaga()]);
}
