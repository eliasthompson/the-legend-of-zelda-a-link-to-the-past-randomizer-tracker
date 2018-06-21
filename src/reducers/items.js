import _ from 'lodash';

import { STORE_ITEMS } from '../actions/items';

const initialState = [
  { id: 'sword1', count: 0, limit: 1, go: false, visible: true },
  { id: 'sword2', count: 0, limit: 1, go: false, visible: false },
  { id: 'sword3', count: 0, limit: 1, go: false, visible: false },
  { id: 'sword4', count: 0, limit: 1, go: false, visible: false },
  { id: 'shield1', count: 0, limit: 1, go: false, visible: true },
  { id: 'shield2', count: 0, limit: 1, go: false, visible: false },
  { id: 'shield3', count: 0, limit: 1, go: false, visible: false },
  { id: 'tunic1', count: 1, limit: 1, go: false, visible: true },
  { id: 'tunic2', count: 0, limit: 1, go: false, visible: false },
  { id: 'tunic3', count: 0, limit: 1, go: false, visible: false },
  { id: 'bow', count: 0, limit: 1, go: false, visible: true },
  { id: 'silvers', count: 0, limit: 1, go: false, visible: false },
  { id: 'boomerang1', count: 0, limit: 1, go: false, visible: true },
  { id: 'boomerang2', count: 0, limit: 1, go: false, visible: true },
  { id: 'hookshot', count: 0, limit: 1, go: false, visible: true },
  { id: 'bombs', count: 1, limit: 1, go: false, visible: true },
  { id: 'mushroom', count: 0, limit: 1, go: false, visible: true },
  { id: 'powder', count: 0, limit: 1, go: false, visible: true },
  { id: 'halfmagic', count: 0, limit: 1, go: false, visible: true },
  { id: 'firerod', count: 0, limit: 1, go: false, visible: true },
  { id: 'icerod', count: 0, limit: 1, go: false, visible: true },
  { id: 'bombos', count: 0, limit: 1, go: false, visible: true },
  { id: 'ether', count: 0, limit: 1, go: false, visible: true },
  { id: 'quake', count: 0, limit: 1, go: false, visible: true },
  { id: 'lantern', count: 0, limit: 1, go: false, visible: true },
  { id: 'hammer', count: 0, limit: 1, go: false, visible: true },
  { id: 'shovel', count: 0, limit: 1, go: false, visible: true },
  { id: 'flute', count: 0, limit: 1, go: false, visible: true },
  { id: 'net', count: 0, limit: 1, go: false, visible: true },
  { id: 'book', count: 0, limit: 1, go: false, visible: true },
  { id: 'bottle', count: 0, limit: 4, go: false, visible: true },
  { id: 'somaria', count: 0, limit: 1, go: false, visible: true },
  { id: 'byrna', count: 0, limit: 1, go: false, visible: true },
  { id: 'cape', count: 0, limit: 1, go: false, visible: true },
  { id: 'mirror', count: 0, limit: 1, go: false, visible: true },
  { id: 'boots', count: 0, limit: 1, go: false, visible: true },
  { id: 'glove1', count: 0, limit: 1, go: false, visible: true },
  { id: 'glove2', count: 0, limit: 1, go: false, visible: false },
  { id: 'flippers', count: 0, limit: 1, go: false, visible: true },
  { id: 'moonpearl', count: 0, limit: 1, go: false, visible: true },
  { id: 'heartpiece', count: 0, limit: 24, go: false, visible: true },
  { id: 'heartcontainer', count: 0, limit: 11, go: false, visible: true },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ITEMS: {
      if (action.data) {
        const items = (_.isArray(action.data)) ? action.data : [action.data];

        const newItems = _.reject(state, (ref) => {
          const item = _.find(items, { id: ref.id });

          return item && ref.id === item.id;
        });

        newItems.push(...items);

        return newItems;
      }

      return state;
    }
    default: {
      return state;
    }
  }
};
