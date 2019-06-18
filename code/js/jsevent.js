function colorMat() {
var color = document.getElementById('welcomeB');
color.style.background = 'blue';
color.style.color = 'white';
color.style.font = '25px';
color.value = '❤︎ W E L C O M E ❤︎ ';
}

function put() {
document.getElementById("bnb").style.animationName = "disappear";
}

function take() {
document.getElementById("bnb").style.animationName = "reappear";
}

function upperC() {
var x = document.getElementById("bcolor");
x.value = x.value.toUpperCase();
}



