import React from 'react';
import { Flag } from './flag';

import i18n from 'i18next';

import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
import { localePlugin } from '../plugins/localisation';

const LocalizationConst = require('../const');

class LocaleSwitcher extends React.Component {

  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      locales: [],
    };
  }

  async componentDidMount() {
    const locales = (LocalizationConst.locales);
    const newLocales = [];
    // const notFound = this.$route.matched.length === 0;
    locales.map((locale) => {
      return newLocales.push({
        name: locale.name,
        isoFlag: locale.isoFlag,
      });
    });
    // locales.map((locale) => {
    //   const currentPath = this.$route;
    //   let newPath;
    //   if (notFound) {
    //     newPath = `/${locale.slug}`;
    //     newLocales.push({
    //       path: newPath,
    //       name: locale.name,
    //       isoFlag: locale.isoFlag,
    //     });
    //   } else if (currentPath.params.locale && locale.slug !== 'us') {
    //     newPath = currentPath.path.replace(currentPath.params.locale, locale.slug);
    //     newLocales.push({
    //       path: newPath,
    //       name: locale.name,
    //       isoFlag: locale.isoFlag,
    //     });
    //   } else if (!currentPath.params.locale && locale.slug !== 'us') {
    //     newPath = `/${locale.slug}${currentPath.path}`;
    //     newLocales.push({
    //       path: newPath,
    //       name: locale.name,
    //       isoFlag: locale.isoFlag,
    //     });
    //   } else if (!currentPath.params.locale && locale.slug === 'us') {
    //     newPath = currentPath.path;
    //     newLocales.push({
    //       path: newPath,
    //       name: locale.name,
    //       isoFlag: locale.isoFlag,
    //     });
    //   } else if (currentPath.params.locale && locale.slug === 'us') {
    //     newPath = currentPath.path.replace(`${currentPath.params.locale}/`, '');
    //     newLocales.push({
    //       path: newPath,
    //       name: locale.name,
    //       isoFlag: locale.isoFlag,
    //     });
    //   }
    // });
    //
    await this.setState({ locales: newLocales });
  }

  changeLanguage(lng) {
    i18n.changeLanguage(lng);
    this.props.setCurrentLocale(localePlugin.activeLocale(i18n.language));
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={['localeSelector', this.props.openLocale ? 'active' : ''].join(' ')}>
        <div className="localeSelector-overlay" onClick={() => {this.props.setOpenLocale(false)}} />
        <div className="localeSelector-ctt">
          <img className="localeSelector-ctt-close" src={require('../assets/svg/icon-close.svg')} onClick={() => {this.props.setOpenLocale(false)}} alt="" />
          {
            this.state.locales.map((locale, index) =>
              <button key={index} className="localeSelector-ctt-lang" onClick={() =>  { this.changeLanguage(locale.isoFlag); this.props.setOpenLocale(false) }}>
                <div className="localeSelector-ctt-lang-flag">
                  <Flag iso={locale.isoFlag} squared={true} />
                </div>
                <span>
                  {locale.name}
                </span>
              </button>
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    openLocale: state.openLocale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOpenLocale: (value) => dispatch({type: actionTypes.SETOPEN_LOCALE, value: value}),
    setCurrentLocale: (value) => dispatch({ type: actionTypes.SET_CURRENT_LOCALE, value: value }),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
