import { all } from "redux-saga/effects";
import { lessonsSaga } from "../../modules/lessons/redux/saga";

export function* watchSagas() {
  yield all([lessonsSaga()]);
}
