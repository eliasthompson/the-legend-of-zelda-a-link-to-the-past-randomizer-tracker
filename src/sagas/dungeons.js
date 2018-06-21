import { put, takeEvery, fork } from 'redux-saga/effects';

import {
  UPDATE_DUNGEON,
  updateDungeons,
} from '../actions/dungeons';


export function* updateDungeonSaga(action) {
  yield put(updateDungeons(action));
}

export function* watchUpdateDungeon() {
  yield takeEvery(UPDATE_DUNGEON, updateDungeonSaga);
}

export default [
  fork(watchUpdateDungeon),
];
