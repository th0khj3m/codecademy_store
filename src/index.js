import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
)