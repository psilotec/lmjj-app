import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDK93AqdXVwAuiT7oURB52HLHfLXDPJb6A",
    authDomain: "lmjj-app.firebaseapp.com",
    databaseURL: "https://lmjj-app.firebaseio.com",
    storageBucket: "lmjj-app.appspot.com",
    messagingSenderId: "1077859351071"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;