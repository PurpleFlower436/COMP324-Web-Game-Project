/* Session storage for a user */
var user = firebase.auth().currentUser;
var uid; //uid used for database calls
if (user != null) {
    uid = user.uid;
} else {
    console.log("No user is signed in");
}

/* Returns user's ID# */
function getUserId() {
    return this.uid;
}

/* Finds if a save exists in each slot, if it does, put last save point */
function loadGames() {
    if (this.uid != null) {
        var ref = firebase.database.ref('users/'+this.uid); // users/uid
    } else {
        console.log("Error: no user is logged in");
    }
}

/* Saves new games */
function newGame() {
    if (this.uid != null) {
        var ref = firebase.database.ref('users/'+this.uid);
        
    }
}

/* Sets the savePoint as the HTML page the user was on when quitting */
function setSavePoint(currentPage) {
    if (this.uid != null) {
        firebase.database().ref('users/' + this.uid).set({
            savePoint: currentPage
        });
    }
}