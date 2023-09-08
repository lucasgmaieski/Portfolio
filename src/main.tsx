import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import ThemeContextProvider from './hooks/useTheme.tsx';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

const GTM_ID = import.meta.env.VITE_APP_GTM_ID;
const tagManagerArgs = {
  gtmId: GTM_ID,
  dataLayer: {
    userId: '001',
    userProject: 'project'
  }
}
TagManager.initialize(tagManagerArgs)

const TRACKING_ID = import.meta.env.VITE_APP_GA4_ID;
ReactGA.initialize(TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: document.location.pathname, title: "Página Inicial" });


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
