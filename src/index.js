import React from 'react';
import ReactDOM from 'react-dom';
import './lang/index';
import 'bulma/css/bulma.css'
import './assets/scss/_main.scss';
import 'flag-icon-css/css/flag-icon.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRunning, faCoffee, faHandPeace, faHandPointer, faPaperPlane, faCode, faArrowDown, faArrowRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { createStore, combineReducers } from 'redux';
import { localesReducer } from './store/reducers/locales';
import { openModalReducer } from './store/reducers/openmodal';
import { Provider } from 'react-redux';

library.add(faRunning, faCoffee, faHandPeace, faHandPointer, faPaperPlane, faCode, faArrowDown, faThumbsUp, faArrowRight);

const rootReducer = combineReducers({
  locales: localesReducer,
  modale: openModalReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  // console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
