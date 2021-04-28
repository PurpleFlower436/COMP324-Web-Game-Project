// Holds user data for session storage
// Makes user-related database calls

function initUser() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) { //if a user is logged in
            var userID = user.uid; //UserID
            sessionStorage["uid"] = userID; //saves userID to session storage
        }
    });
}