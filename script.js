var red = setInterval(function(){ rosu() }, 3000);

function rosu() {
    var x = document.getElementById("red");
    x.style.backgroundColor = x.style.backgroundColor == "red" ? "black" : "red";
}

var red = setInterval(function(){ galben() }, 1500);

function galben() {
    var x = document.getElementById("yellow");
    x.style.backgroundColor = x.style.backgroundColor == "black" ? "yellow" : "black";
}

var red = setInterval(function(){ verde() }, 3000);

function verde() {
    var x = document.getElementById("green");
    x.style.backgroundColor = x.style.backgroundColor == "black" ? "green" : "black";
}