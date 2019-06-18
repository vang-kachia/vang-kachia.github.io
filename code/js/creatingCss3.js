function fadeOut() {
const square = document.getElementById('grape');
square.style.opacity = '0';
}

function fadeIn() {
const square = document.getElementById('grape');
square.style.opacity = '1';
}

function easeIn(el) {
var elem = document.getElementById(el);
elem.style.transition = "left 1s ease-in 0s";
elem.style.left = '0px';
}

function easeOut(el) {
var elem = document.getElementById(el);
elem.style.transition = "left 2s ease-out 0s";
elem.style.left = '-1000px';
}

function slide1(el) {
var elem = document.getElementById(el);
elem.style.transition = "height 1.0s linear 0s";
elem.style.height = '0';
}

function slide2(el) {
var elem = document.getElementById(el);
elem.style.transition = "height 1.0s linear 0s";
elem.style.height = '80px';
}

function slide3(el) {
var elem = document.getElementById(el);
elem.style.transition = "height 1.0s linear 0s";
elem.style.height = '300px';
}

var actual = 0;
var total = 3;
function addClass(elem, name) {
elem.className = elem.className + " " + name;
}

function deleteClass(elem, name) {
var c = elem.className;
elem.className = c.replace(name, "").replace(/   /g, " ").replace(/^ | $/g, "");
}

function nextImg() {
var e;
e = document.getElementById("img" + actual);
deleteClass(e, "visible");
actual++;
if (actual > total - 1) actual = 0;
e = document.getElementById("img" + actual);
addClass(e, "visible");
}

var slider = setInterval(nextImg, 4000);