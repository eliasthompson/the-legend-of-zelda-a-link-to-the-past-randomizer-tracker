import { put, takeEvery, fork } from 'redux-saga/effects';

import {
  DETECT_OPTION,
  updateOption,
} from '../actions/options';


export function* detectOptionSaga(action) {
  yield put(updateOption(action));
}

export function* watchOption() {
  yield takeEvery(DETECT_OPTION, detectOptionSaga);
}

export default [
  fork(watchOption),
];
