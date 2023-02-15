import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BuildingContextProvider } from './context/BuildingContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BuildingContextProvider>
      <App />
    </BuildingContextProvider>
  </React.StrictMode>
);

