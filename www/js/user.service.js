// Save database information for a user
var userData = [];

// Gets user data when a game is loaded
function initData() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var dataRef = firebase.database().ref('users/'+user.uid);
            dataRef.once('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    userData.push(childSnapshot.val());
                });
                console.log(user.uid);
                console.log(userData);
            });
                document.getElementById('error-message').style.visibility = "hidden";
        } else {
            console.log("Error: No data found. No user is signed in");
            document.getElementById('error-message').textContent = "Warning: User is not signed in, data cannot be saved.";
            document.getElementById('error-message').style.visibility = "visible";
        }
    });
    // Event Listeners for Home Screen buttons
    document.getElementById('load-game').addEventListener('click', updatePoints, false); //Currently update points as data is not tracked across pages
    document.getElementById('new-game').addEventListener('click', checkSave, false);
    document.getElementById('popup-yes').addEventListener('click', popupYes, false);
    document.getElementById('popup-no').addEventListener('click', popupNo, false);
}

function updatePoints() {
    firebase.auth().onAuthStateChanged(user => {
        const points = document.getElementById('error-message').textContent;
        firebase.database().ref('users/'+user.uid).update({
            points: points
        });
        console.log("Points updated to "+points);
    });
    
}

function resetUserData() {
    firebase.auth().onAuthStateChanged(user => {
        firebase.database().ref("users/"+user.uid).set({
            characterName: "default",
            characterSex: "default",
            lastSave: "default",
            points: 0,
            gold: 0,
            porkchop: 0,
            bread: 0,
            berries: 0
        });
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
/*
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
*/

// Sets the savePoint as the HTML page the user was on when quitting
function setSavePoint(currentPage) {
    firebase.database().ref('users/' + this.uid).set({
            savePoint: currentPage
    });
}
