import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import Home from './components/home';
import Ico from './components/ico';
import BlogSingle from './components/blog-single';
import Blog from './components/blog';
// import RoadMap from './components/roadmap';
import Token from './components/token';
import Routes from './config/routes';


ReactDOM.render(<Routes/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
