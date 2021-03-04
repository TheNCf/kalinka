import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { getAllModels, getAllColors } from './Redux/action';
import { rootReducer } from './Redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getAllModels());
store.dispatch(getAllColors());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);