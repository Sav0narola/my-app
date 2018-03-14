import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from "./components/Button";
import SimpleText from "./components/SimpleText";
import Header from "./components/Header";

render(<App />, document.getElementById('main'));
registerServiceWorker();

render (<Button buttonName={'+'} color={'#7ED321'}/>, document.querySelector('#button1'));

render (<Button buttonName={'-'} color={'D0021B'}/>, document.querySelector('#button2'));

render (<SimpleText/>, document.querySelector('#main'));

render(<Header/>, document.querySelector('#head'));