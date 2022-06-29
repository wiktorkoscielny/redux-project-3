import React from 'react';
import ReactDOM from 'react-dom/client';


// styles
import './index.css';

// components
import App from './App';

// redux
import store from './redux/store';
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);