import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./types";
import * as API from "./apis";
import * as Actions from "./actions"

export function* getLessonsDataRequest():any {
  try {
    const response = yield call(API.getLessonsDataRequest);
    yield put(Actions.getLessonsResponse(response.data));
  } catch (err: any) { 
    console.log(err)
  }
}

export function* lessonsSaga() {
  yield takeEvery(actionTypes.get_lessons_data, getLessonsDataRequest);
}
