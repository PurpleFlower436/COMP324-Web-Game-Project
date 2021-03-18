document.getElementsByTagName('div')[0].innerHTML = 0;

function rob() {
    var z = Math.floor((Math.random() * 7) + 4);
    sessionStorage.setItem("gold", z);
    document.getElementsByTagName('div')[0].innerHTML = z;}

function beg() {
    var y = Math.floor((Math.random() * 5) + 1);
    sessionStorage.setItem("gold", y);
    document.getElementsByTagName('div')[0].innerHTML = y;}

function goldtotal() {document.getElementsByTagName('div')[0].innerHTML = sessionStorage.getItem("gold");}

