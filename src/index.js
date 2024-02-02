import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';
// Import the store here.
import { store } from './app/store';
import './index.css';

// Pass state and dispatch props to the <App /> component.

const root = createRoot(document.getElementById('root'));

const render = () => {
  root.render(
    <App 
      state = {store.getState()}
      dispatch = {store.dispatch}
    />)
};
render();

// Subscribe render to the store.
store.subscribe(render);