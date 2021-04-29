// Save database information for a user

var berries;
var bread;
var characterName;
var characterSex;
var gold;
var lastSave;
var points;
var porkchop;

// Gets user data when a game is loaded
function initData() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var dataRef = firebase.database().ref("users/"+user.uid);
            dataRef.once("value").then(function(snapshot) {
                this.berries = snapshot.child("berries").value;
                this.bread = snapshot.child("bread").val();
                this.characterName = snapshot.child("characterName").val();
                this.characterSex = snapshot.child("characterSex").val();
                this.gold = snapshot.child("gold").val();
                this.lastSave = snapshot.child("lastSave").val();
                this.points = snapshot.child("points").val();
                this.porkchop = snapshot.child("porkchop").val();
            });
                document.getElementById('error-message').style.visibility = "hidden";
                console.log(this.berries, this.bread, this.characterName, this.characterSex, this.gold, this.lastSave, this.points, this.porkchop);
        } else {
            console.log("Error: No data found. No user is signed in");
            document.getElementById('error-message').textContent = "Warning: User is not signed in, data cannot be saved.";
            document.getElementById('error-message').style.visibility = "visible";
        }
    });
    // Event Listeners for Home Screen buttons
    document.getElementById('load-game').addEventListener('click', loadGame, false);
    document.getElementById('new-game').addEventListener('click', checkSave, false);
    document.getElementById('popup-yes').addEventListener('click', popupYes, false);
    document.getElementById('popup-no').addEventListener('click', popupNo, false);
}

function resetUserData() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref("users/"+user.uid).set({
                characterName: "",
                characterSex: "",
                lastSave: "",
                points: 0,
                gold: 0,
                porkchop: 0,
                bread: 0,
                berries: 0,
                sword: 0
            });
        }
    });
}

function loadGame() {
    if (this.characterName === "") {
        document.getElementById('error-message').textContent = "Error: no save data found. Ensure you are logged in";
    } else {
        location.href = "/pages/" + this.lastSave;
    }
}

function checkSave() {
    if (this.lastSave === "default") {
        location.href = "/pages/Introduction.html"; // Would need to go to new game if it worked
    } else {
        document.getElementById('popup-text').style.visibility = "visible";
    }
}
function popupYes() {
    resetUserData();
    location.href = "pages/Introduction.html";
}
function popupNo() {
    document.getElementById('popup-text').style.visibility = "hidden";
}

// Save Data when a New Game is Created
function newGame() {
    var charName = document.getElementById('char-name').value;
    var charSex;
    firebase.database().ref('users/'+currentUser.user.uid).set({
        characterName: charName,
        //characterSex: ,
        lastSave: "/pages/Introduction.html"
    });
    this.characterName = charName;
    this.characterSex = charSex;
    this.lastSave = "/pages/Introduction.html";
}

// Sets the savePoint as the HTML page the user was on when quitting
function setSavePoint(currentPage) {
    firebase.database().ref('users/' + this.uid).set({
            savePoint: currentPage
    });
}
