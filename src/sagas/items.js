import { put, takeEvery, fork } from 'redux-saga/effects';
import _ from 'lodash';

import {
  UPDATE_ITEMS,
  storeItems,
} from '../actions/items';


export function* updateItemSaga(action) {
  yield put(storeItems(_.get(action, 'data')));
}

export function* watchItem() {
  yield takeEvery(UPDATE_ITEMS, updateItemSaga);
}

export default [
  fork(watchItem),
];
