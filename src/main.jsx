import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Store, persistor } from './features/Store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
