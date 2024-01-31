// storage.js
const LAST_PLAYED_KEY = 'lastPlayed';
const LAST_POSITION_KEY = 'lastPosition';

export const loadLastPlayed = () => {
  const storedData = localStorage.getItem(LAST_PLAYED_KEY);
  return storedData ? JSON.parse(storedData) : null;
};

export const saveLastPlayed = (file) => {
  localStorage.setItem(LAST_PLAYED_KEY, JSON.stringify(file));
};

export const loadLastPosition = () => {
  const position = localStorage.getItem(LAST_POSITION_KEY);
  return position ? parseFloat(position) : 0;
};

export const saveLastPosition = (position) => {
  localStorage.setItem(LAST_POSITION_KEY, position.toString());
};
