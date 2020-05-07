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
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

library.add(faRunning, faCoffee, faHandPeace, faHandPointer, faPaperPlane, faCode, faArrowDown, faThumbsUp, faArrowRight);

const store = createStore(reducer);

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
