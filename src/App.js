import React from 'react';
import { Header } from './components/header';
import Footer from './components/footer';
import LocaleSwitcher from './components/localeSwitcher';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { ScrollToTop } from './components/scrollTop';

import { Index } from './pages/index';
import { About } from './pages/about';
import { NotFound } from './pages/404';
import { Projects } from './pages/projects';
import { Technos } from './pages/technos';
import { Contact } from './pages/contact';

export class App extends React.Component {
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

export default App;
