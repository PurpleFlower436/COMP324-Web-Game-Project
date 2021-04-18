

function togglePlay() {
  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();

   //then add 
   //<audio id="myAudio" src="http://www.sousound.com/music/healing/healing_01.mp3" preload="auto">
   //</audio>
   //<a onClick="togglePlay()">Click here to hear.</a>
   }
function session_start() {
    sessionStorage.setItem("gold","Gold:0");
    sessionStorage.setItem("hydra_health",100);
    sessionStorage.setItem("cyclops_health",50);
    sessionStorage.setItem("player_health",30);
    sessionStorage.setItem("hydra_fight",False);
    sessionStorage.setItem("cyclops_fight",False);
    document.getElementsByTagName('div')[0].innerHTML = sessionStorage.getItem("gold");}
function hydra_fight_init() {
     sessionStorage.setItem("hydra_fight",True);}
function cyclops_fight_init() {
     sessionStorage.setItem("cyclops_fight",True);}
function attack() {
      if(sessionStorage.getItem("cyclops_fight") == True){
          var a = sessionStorage.getItem("cyclops_health");
          var b = sessionStorage.getItem("player_health");
          sessionStorage.setItem("cyclops_health",a-10);
          sessionStorage.setItem("player_health",b-4);}
      if(sessionStorage.getItem("hydra_fight") == True){
          var a = sessionStorage.getItem("hydra_health");
          var b = sessionStorage.getItem("player_health");
          sessionStorage.setItem("hydra_health",a-10);
          sessionStorage.setItem("player_health",b-6);}}
function defend() {
     var a = sessionStorage.getItem("player_health");
     sessionStorage.setItem("player_health",a-1);}
function rob() {
    var z = Math.floor((Math.random() * 7) + 4);
    sessionStorage.setItem("gold","Gold:" + z);}
function beg() {
    var y = Math.floor((Math.random() * 5) + 1);
    sessionStorage.setItem("gold","Gold:" + y);}
function goldtotal() {document.getElementsByTagName('div')[0].innerHTML = sessionStorage.getItem("gold");}
