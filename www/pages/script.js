function rob() {
    var z = Math.floor((Math.random() * 7) + 4);
    sessionStorage.setItem("gold","Gold:" + z);}
function beg() {
    var y = Math.floor((Math.random() * 5) + 1);
    sessionStorage.setItem("gold","Gold:" + y);}
function session_start() {
    sessionStorage.setItem("gold","Gold:0");
    document.getElementsByTagName('div')[0].innerHTML = sessionStorage.getItem("gold");}
function goldtotal() {document.getElementsByTagName('div')[0].innerHTML = sessionStorage.getItem("gold");}
