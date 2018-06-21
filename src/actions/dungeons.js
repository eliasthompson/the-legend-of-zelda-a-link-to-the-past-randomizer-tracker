export const UPDATE_DUNGEON = 'UPDATE_DUNGEON';
export const UPDATE_DUNGEONS = 'UPDATE_DUNGEONS';

export const updateDungeon = dungeon => ({ type: UPDATE_DUNGEON, data: dungeon });
export const updateDungeons = dungeon => ({ type: UPDATE_DUNGEONS, data: dungeon });
