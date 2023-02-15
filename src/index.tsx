import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Auth0Provider
    domain="dev-s8tt4bkg.us.auth0.com"
    clientId="A9PMM8e5nCL2D7ghFrvasfYwPNmlBY7Z"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
