import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('main'));
registerServiceWorker();




