import { UPDATE_OPTION } from '../actions/options';

const initialState = {
  mode: 'standard',
  layout: '6x7',
  assumeBombs: true,
  assumeTunic: true,
  showBombs: false,
  showGoModeMarkers: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OPTION:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
