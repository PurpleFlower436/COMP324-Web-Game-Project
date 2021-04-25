// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDqSvvfp4SSycrWWS5YPaTkk_RZiYd9ZmM",
    authDomain: "comp-324-story-game.firebaseapp.com",
    databaseURL: "https://comp-324-story-game-default-rtdb.firebaseio.com",
    projectId: "comp-324-story-game",
    storageBucket: "comp-324-story-game.appspot.com",
    messagingSenderId: "257537359537",
    appId: "1:257537359537:web:0257937760a7a0268f6c90",
    measurementId: "G-M8XW1WKDGT"
};
firebase.initializeApp(firebaseConfig);

function check() {
    alert("Function call successful");
    document.write(<p>success</p>);
}

function login() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        // Check for input
        if (email.length === 0) {
            alert("Error: 'Email' field cannot be blank.");
            return;
        }
        if (password.length === 0) {
            alert("Error: 'Password' field cannot be blank.");
            return;
        }
        // Firebase func to sign in
        firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
            // Error handling
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert("Incorrect password");
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('Login-Btn').disabled = false;
        });
    }
    document.getElementById('Login-Btn').disabled = true;
}

function signUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // Check for input
    if (email.length === 0) {
        alert("Error: 'Email' field cannot be blank.");
        return;
    }
    if (password.length === 0) {
        alert("Error: 'Password' field cannot be blank.");
        return;
    }
    // Firebase func to create a new user
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
        // Error handling
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
            alert("The password is too weak. Please enter a stronger password.");
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // If user is signed in
            var email = user.email;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // .displayName, .photoURL, .emailVerified
            document.getElementById('login-status').textContent = "Signed in";
            document.getElementById('login-btn').textContent = 'Sign out';
            document.getElementById('account-details').textContent = JSON.stringify(user,null,'  ');
        } else { // If user is signed out
            document.getElementById('login-status').textContent = 'Signed out';
            document.getElementById('login-btn').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
        }
        document.getElementById('login-btn').disabled = false;
    });
    // Listeners
    document.getElementById('login-btn').addEventListener('click', login, false);
    document.getElementById('signup-btn').addEventListener('click', signUp, false);
}

/*
function login() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredetial) => {
          var user = userCredetial.user;
          // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("The following error has occured: "+errorCode+" / "+ errorMessage);
    });
}
*/

/*
function signUp() {
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          var user = userCredential.user;
          // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log("The following error has occured: "+errorCode+" / "+ errorMessage);
    });
}
*/

/*
function logoutBtnClick() {
    firebase.auth().signOut().then(() => {
        console.log("Logout Successful");
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("The following error has occured: "+errorCode+" / "+ errorMessage);
    });
}
*/

/*
function authStateListener() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
*/