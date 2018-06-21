import { UPDATE_DUNGEONS } from '../actions/dungeons';

const initialState = {
  easternpalace: { reward: 'unknown', medallion: null, chests: 3, completed: false },
  desertpalace: { reward: 'unknown', medallion: null, chests: 2, completed: false },
  towerofhera: { reward: 'unknown', medallion: null, chests: 2, completed: false },
  palaceofdarkness: { reward: 'unknown', medallion: null, chests: 5, completed: false },
  swamppalace: { reward: 'unknown', medallion: null, chests: 6, completed: false },
  skullwoods: { reward: 'unknown', medallion: null, chests: 2, completed: false },
  thievestown: { reward: 'unknown', medallion: null, chests: 4, completed: false },
  icepalace: { reward: 'unknown', medallion: null, chests: 3, completed: false },
  miserymire: { reward: 'unknown', medallion: null, chests: 2, completed: false },
  turtlerock: { reward: 'unknown', medallion: null, chests: 5, completed: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DUNGEONS:
      return {
        ...state,
        ...action.data.data,
      };
    default:
      return state;
  }
};
