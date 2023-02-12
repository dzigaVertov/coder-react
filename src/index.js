import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6sxc2oTM2SaXkuk6M-jXnTgz0k3srQ6I",
  authDomain: "coder-react-bb3d5.firebaseapp.com",
  projectId: "coder-react-bb3d5",
  storageBucket: "coder-react-bb3d5.appspot.com",
  messagingSenderId: "239123193863",
  appId: "1:239123193863:web:eba20009acf8b200540aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


