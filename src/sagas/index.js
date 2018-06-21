import { all } from 'redux-saga/effects';

import options from './options';
import items from './items';
import dungeons from './dungeons';

export default function* rootSaga() {
  yield all([
    ...options,
    ...items,
    ...dungeons,
  ]);
}
