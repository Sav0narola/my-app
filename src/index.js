import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from "./components/Button";
import SimpleText from "./components/SimpleText";

render(<App />, document.getElementById('main'));
registerServiceWorker();


render (<SimpleText/>, document.querySelector('#main'));

