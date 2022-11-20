import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout/App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN!;
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID!;
const redirectUri = `${window.location.origin}/login`;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
