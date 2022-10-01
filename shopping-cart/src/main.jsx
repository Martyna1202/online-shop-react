import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss';
import { CardContextProvider } from './useContext/CardContext'

import { BrowserRouter } from "react-router-dom";
import { BasicsContextProvider } from './useContext/BasicsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardContextProvider>
      <BasicsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </BasicsContextProvider>
    </CardContextProvider>
  </React.StrictMode>
)
