function create() {
var newh3 = document.createElement("h3");
var newfall = document.createTextNode("falling fast.");
newh3.appendChild(newfall);
var parent = document.getElementById("parent1");
var div = document.getElementById("dId1");
parent.insertBefore(newh3, div);
}

function addTextNode(text) {
var addText = document.createTextNode(text),
pId1 = document.getElementById("pId1");
pId1.appendChild(addText);
}

function insert() {
var item = document.createElement("UL");
var sock = document.createTextNode("Socks");
item.appendChild(sock);
var list = document.getElementById("rainItems");
list.insertBefore(item, list.childNodes[0]);
}

function remove() {
var list = document.getElementById("rainItems");
list.removeChild(list.childNodes[0]);
}