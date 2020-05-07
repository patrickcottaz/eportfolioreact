import * as actionTypes from './actions';

const initialState = {
  openLocale: false,
  locale: {},
  defaultLocale: {},
  locales: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETOPEN_LOCALE:
      return {
        ...state,
        openLocale: action.value
      };
    case actionTypes.SET_CURRENT_LOCALE:
      return {
        ...state,
        locale: action.value,
      };
    case actionTypes.SET_DEFAULT_LOCALE:
      return {
        ...state,
        defaultLocale: action.value,
      };
    case actionTypes.SET_LOCALES:
      return {
        ...state,
        locales: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
