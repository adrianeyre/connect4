import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Connect4 from './components/connect4/connect4';

import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Connect4 />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
