


/* Music */
function togglePlay() {
  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();

   //then add 
   //<audio id="myAudio" src="wherever_the_music_is.mp3" preload="auto">
   //</audio>
   //<a onClick="togglePlay()">Click here to hear.</a>
}

function session_start() {
    sessionStorage.setItem("gold","Gold:0");
    document.getElementById("golden").innerHTML = sessionStorage.getItem("gold");
}

/* Combat Functions */
function attack_hydra() {
    let health = document.getElementById("health_hydra")
    health.value -= 60;
    if (health.value <= 0) {
	    window.location.href = "Scenario10a.html";
    }
    let health1 = document.getElementById("health_player")
    health1.value -= 15;
}

function attack_cyclops() {
    let health = document.getElementById("health_cyclops")
    health.value -= 60;
    if (health.value <= 0) {
	    window.location.href = "CyclopsDefeated.html";
    }
    let health1 = document.getElementById("health_player")
    health1.value -= 15;
    }

function heal() {
     var a = sessionStorage.getItem("player_health");
     sessionStorage.setItem("player_health",a-1);
}

function rob() {
    var z = Math.floor((Math.random() * 7) + 4);
    sessionStorage.setItem("gold","Gold:" + z);
}

function beg() {
    var y = Math.floor((Math.random() * 5) + 1);
    sessionStorage.setItem("gold","Gold:" + y);
}

function goldtotal() {
    document.getElementById("golden").innerHTML = sessionStorage.getItem("gold");
}
