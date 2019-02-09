import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {Results, Filters, Banner} from './Results';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Banner />, document.getElementById("banner"));
ReactDOM.render(<Filters />, document.getElementById("filters"));
ReactDOM.render(<Results />, document.getElementById("results"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
