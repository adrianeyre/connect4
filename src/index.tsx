import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import Connect4 from './components/connect4/connect4';

import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Connect4 />, document.getElementById('root'));
serviceWorker.unregister();
