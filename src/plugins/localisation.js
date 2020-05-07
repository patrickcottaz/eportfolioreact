const LocalizationConst = require('../const');
const locales = (LocalizationConst.locales);

export const localePlugin = {
  locales: locales,
  defaultLocale: locales[0],
  activeLocale(givenString) {
    const locale = locales.filter(locale => (locale.slug === givenString));
    return locale[0];
  },
}
