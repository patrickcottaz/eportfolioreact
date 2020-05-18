import * as actionsTypes from './actionTypes';

export const setOpenLocale = (value) => {
  return {
    type: actionsTypes.SETOPEN_LOCALE,
    value
  }
};
