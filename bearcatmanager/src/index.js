import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './admin';
<<<<<<< HEAD
import FindanEvent from './FindanEvent';
import Home from './Home';
=======
import CreateEvent from './CreateEvent';
import Login from './Login';
>>>>>>> 2071d0df523abb0ce4c256c48f213d45e72c7808
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Admin />
<<<<<<< HEAD
    <FindanEvent />
    <Home />
=======
    <CreateEvent />
    <Login />
>>>>>>> 2071d0df523abb0ce4c256c48f213d45e72c7808
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
