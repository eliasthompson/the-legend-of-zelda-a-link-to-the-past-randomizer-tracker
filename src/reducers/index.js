import { combineReducers } from 'redux';

import options from './options';
import items from './items';
import dungeons from './dungeons';

export default combineReducers({
  options,
  items,
  dungeons,
});
