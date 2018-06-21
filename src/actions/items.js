export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export const STORE_ITEMS = 'STORE_ITEMS';

export const updateItems = item => ({ type: UPDATE_ITEMS, data: item });
export const storeItems = item => ({ type: STORE_ITEMS, data: item });
