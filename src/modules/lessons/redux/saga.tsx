import { call,  takeEvery } from "redux-saga/effects";
import { actionTypes } from "./types";
import * as API from "./apis";

export function* getLessonsDataRequest():any {
  try {
    const response = yield call(API.getLessonsDataRequest);
  } catch (err: any) { 
    console.log(err)
  }
}

export function* authSaga() {
  yield takeEvery(actionTypes.get_lessons_data, getLessonsDataRequest);
}
