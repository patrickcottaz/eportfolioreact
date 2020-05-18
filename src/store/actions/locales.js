import * as actionsTypes from './actionTypes';

export const setDefaultLocale = (value) => {
  return {
    type: actionsTypes.SET_DEFAULT_LOCALE,
    value
  }
};

export const setCurrentLocale = (value) => {
  return {
    type: actionsTypes.SET_CURRENT_LOCALE,
    value
  }
};

export const setLocales = (value) => {
  return {
    type: actionsTypes.SET_LOCALES,
    value
  }
};
