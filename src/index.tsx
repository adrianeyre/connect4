import React from 'react';
import { createRoot } from 'react-dom/client';

import Connect4 from './components/connect4/connect4';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root');

if (!container) throw new Error('No #root element to mount Connect 4 into');

createRoot(container).render(
  <React.StrictMode>
    <Connect4 />
  </React.StrictMode>,
);

reportWebVitals();
