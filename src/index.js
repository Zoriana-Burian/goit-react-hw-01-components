import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();




//<Profile 
  //name={user.name}
//  tag={user.tag}
//  location={user.location}
//  avatar={user.avatar}
//  stats={user.stats}
 // statsFolovers={user.stats.folovers}
//  statsViews={user.stats.views}
//  statsLikes={user.stats.likes} />

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.querySelector('#root'));

