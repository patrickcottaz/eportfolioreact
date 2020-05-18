import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  locale: {},
  defaultLocale: {},
  locales: [],
};

export const localesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LOCALE:
      return updateObject(state, { locale: action.value });
    case actionTypes.SET_DEFAULT_LOCALE:
      return updateObject(state, { defaultLocale: action.value });
    case actionTypes.SET_LOCALES:
      return updateObject(state, { locales: action.value, });
    default:
      return state;
  }
};
