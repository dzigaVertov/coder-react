
import fetch from 'node-fetch';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
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

const db = getFirestore();
const itemsCollection = collection(db, "items");

async function agregarDoc(prod){
    delete prod.id;
    prod.stock = 20;
    return addDoc(itemsCollection, prod );
}

async function llenardb(){
    const resp = await fetch('https://fakestoreapi.com/products');
    const respJson = await resp.json();
    respJson.map(prod => agregarDoc(prod));
}


llenardb();


