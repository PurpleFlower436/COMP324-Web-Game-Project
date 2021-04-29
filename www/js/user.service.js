/* Get database information for a user */
var user = firebase.auth().currentUser;
var berries;
var bread;
var characterName;
var characterSex;
var gold;
var lastSave;
var points;
var porkchop;
var sword;

// Gets user data when a game is loaded
function initData() {
    if (currentUser != null) {
        var dataRef = firebase.auth().ref("users/"+currentUser.uid);
        dataRef.once("value").then(function(snapshot) {
            berries = snapshot.child("berries").val();
            bread = snapshot.child("bread").val();
            characterName = snapshot.child("characterName").val();
            characterSex = snapshot.child("characterSex").val();
            gold = snapshot.child("gold").val();
            lastSave = snapshot.child("lastSave").val();
            points = snapshot.child("points").val();
            porkchop = snapshot.child("porkchop").val();
            sword = snapshot.child("sword").val();
        });
    } else {
        console.log("Error: No data found. No user is signed in");

    }
    // Event Listeners for Home Screen buttons
    document.getElementById('load-game').addEventListener('click', loadGame, false);
    document.getElementById('new-game').addEventListener('click', checkSave, false);
}

function loadGame() {
    if (this.characterName === "") {
        document.getElementById('error-message').textContent = "Error: no save data found. Ensure you are logged in";
    } else {
        
    }
}

function checkSave() {

}


/* Returns user's ID# */
function getUserId() {
    return this.uid;
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