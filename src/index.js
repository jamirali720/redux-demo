import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
// import store from './components/services/store/store';
import store2 from './components/services/store/store2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store2}>
    <App />
  </Provider>
);

