import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from "./components/Button";

render(<App />, document.getElementById('main'));
registerServiceWorker();

alert('testAlert');

render (<Button/>, document.querySelector('#main'));

