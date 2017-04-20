import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: '*************',
//   authDomain: '*************.firebaseapp.com',
//   databaseURL: 'https://*************.firebaseio.com',
//   storageBucket: '*************.appspot.com',
//   messagingSenderId: '*************'
// }

// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
