
/* IGNORE FOR NOW */

(function() {
    const config = {
        apiKey: "AIzaSyDqSvvfp4SSycrWWS5YPaTkk_RZiYd9ZmM",
        authDomain: "comp-324-story-game.firebaseapp.com",
        databaseURL: "https://comp-324-story-game-default-rtdb.firebaseio.com",
        projectId: "comp-324-story-game",
        storageBucket: "comp-324-story-game.appspot.com",
        messagingSenderId: "257537359537",
        appId: "1:257537359537:web:0257937760a7a0268f6c90",
        measurementId: "G-M8XW1WKDGT"
    };
    firebase.initializeApp(config);

    
}());


// USER LOGIN WITH FIREBASE \\

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


// USER SIGN UP WITH FIREBASE \\

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