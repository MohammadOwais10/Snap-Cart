import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAw8UOb3-M24BxRbGYNtW0DKeiYPsAnUNM",
  authDomain: "cart-ffa39.firebaseapp.com",
  projectId: "cart-ffa39",
  storageBucket: "cart-ffa39.appspot.com",
  messagingSenderId: "134845748389",
  appId: "1:134845748389:web:b2cd2d0d36de28fd57694c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);