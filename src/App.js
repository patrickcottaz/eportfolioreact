import React from 'react';
import { Header } from './components/header';
import Footer from './components/footer';
import LocaleSwitcher from './components/localeSwitcher';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import i18n from 'i18next';

import * as actionCreators from './store/actions/index';
import { connect } from 'react-redux';

import { ScrollToTop } from './components/scrollTop';

import { Index } from './pages/index';
import { About } from './pages/about';
import { NotFound } from './pages/404';
import { Projects } from './pages/projects';
import { Technos } from './pages/technos';
import { Contact } from './pages/contact';

import { localePlugin } from './plugins/localisation';

class App extends React.Component {

  componentDidMount() {
    this.props.setDefaultLocale(localePlugin.defaultLocale);
    this.props.setCurrentLocale(localePlugin.activeLocale(i18n.language));
    this.props.setLocales(localePlugin.locales);
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/technos">
            <Technos />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <LocaleSwitcher />
        <Footer />
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    defaultLocale: state.locales.defaultLocale,
    activeLocale: state.locales.locale,
    locales: state.locales.locales
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocale: (value) => dispatch(actionCreators.setCurrentLocale(value)),
    setDefaultLocale: (value) => dispatch(actionCreators.setDefaultLocale(value)),
    setLocales: (value) => dispatch(actionCreators.setLocales(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
