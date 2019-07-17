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


