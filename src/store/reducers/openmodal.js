import * as actionTypes from '../actions';

const initialState = {
  openLocale: false,
};

export const openModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SETOPEN_LOCALE:
      return {
        ...state,
        openLocale: action.value
      };
    default:
      return state;
  }
};
