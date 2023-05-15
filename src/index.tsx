import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext';
import { CartLSUpdateProvider } from './context/CartLSUpdateContext';
import { FavLSUpdateProvider } from './context/FavLSUpdateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HashRouter>
    <React.StrictMode>
      <FavLSUpdateProvider>
        <CartLSUpdateProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CartLSUpdateProvider>
      </FavLSUpdateProvider>
    </React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
