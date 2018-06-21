export const DETECT_OPTION = 'DETECT_OPTION';
export const UPDATE_OPTION = 'UPDATE_OPTION';

export const detectOption = option => ({ type: DETECT_OPTION, data: option });
export const updateOption = action => ({ type: UPDATE_OPTION, data: action.data });
