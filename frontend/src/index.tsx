import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components';
import { BrowserRouter } from 'react-router-dom';
import { CandidatesProvider, ColumnsProvider } from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CandidatesProvider>
        <ColumnsProvider>
          <App />
        </ColumnsProvider>
      </CandidatesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
