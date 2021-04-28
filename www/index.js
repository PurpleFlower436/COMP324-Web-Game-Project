
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
        });
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        firebase.auth().onAuthStateChanged(user => {
            if (user) { //if the user successfully logs in
                location.href = "../index.html";
                alert("You are logged in!");
            }
        });
    }
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
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            location.href = "../index.html";
            alert("Account created!");
        }
    });
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}

function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // If user is signed in
            var uid = user.uid;
            sessionStorage["uid"] = uid; //saves user to session storage upon login
            //document.getElementById('login-status').textContent = "Signed in";
            document.getElementById('login-btn').textContent = 'Log out';
            document.getElementById('signup-btn').hidden = true;
            //document.getElementById('account-details').textContent = JSON.stringify(user,null,'  ');
        } else { // If user is signed out
            //document.getElementById('login-status').textContent = 'Signed out';
            document.getElementById('login-btn').textContent = 'Log in';
            //document.getElementById('account-details').textContent = 'null';
        }
        if (!user) {
            sessionStorage.removeItem("uid");
        }
    });
    // Listeners for login and sign up buttons
    document.getElementById('login-btn').addEventListener('click', login, false);
    document.getElementById('signup-btn').addEventListener('click', signUp, false);
}
