import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD79M_3ZoTUU96foz5M4UDPXAZHt17Qu7I",
  authDomain: "ecommerce-38c62.firebaseapp.com",
  projectId: "ecommerce-38c62",
  storageBucket: "ecommerce-38c62.appspot.com",
  messagingSenderId: "178016937483",
  appId: "1:178016937483:web:7ba0580c3476c88a56c90e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
)

