function User() {
var Name = document.getElementById("Name").value;
var Category = document.getElementById("Category").value;
var Item = document.getElementById("Item").value;

var person = {Name: Name, Category: Category, Item: Item};
localStorage.setItem('output', JSON.stringify(person));
document.getElementById("localStorageOutput").innerHTML = "Thank you for the submission. Please click overview to see a summary.";
}

function Reveal() {
var output = JSON.parse(localStorage.getItem('output'));
document.getElementById("localStorageOutput").innerHTML = output.Name + " is bringing " + output.Item + " from the " + output.Category + " category";
}


function adjustPicture() {
    var picWidth = document.getElementById("picWidth").value;
    document.getElementById("hunt").style.width = picWidth + '%'; 
    }
function adjustPercentage(percentage) {
    document.getElementById("picSliderOutput").innerHTML = percentage + '%';
    }
function adjustPixels(pixels) {
    document.getElementById("textSliderOutput").innerHTML = pixels + ' px';
    }


function create() {
        var newh3 = document.createElement("h3");
        var newfall = document.createTextNode("I AM.");
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