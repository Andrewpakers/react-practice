import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouteSwitch from "./routing/RouteSwitch";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZUaFvC6bMxWZrpIU6IQnH5bkAcmdOYJE",
  authDomain: "react-practice-fe613.firebaseapp.com",
  projectId: "react-practice-fe613",
  storageBucket: "react-practice-fe613.appspot.com",
  messagingSenderId: "815576732164",
  appId: "1:815576732164:web:5c2b37bd4f614391ef9b51",
  measurementId: "G-83LWYNS324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
