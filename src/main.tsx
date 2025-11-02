import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { registerSW } from 'virtual:pwa-register';
import { HashRouter } from 'react-router-dom';

registerSW();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
