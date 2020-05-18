import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  openLocale: false,
};

export const openModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETOPEN_LOCALE:
      return updateObject(state, { openLocale: action.value });
    default:
      return state;
  }
};
