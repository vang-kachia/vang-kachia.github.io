// JavaScript file for Local Storage

// Function to track button clicks

function Count() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.count) {
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			localStorage.count = 1;
		}

		document.getElementById("localClicks").innerHTML = "Your Local Storage Count: " + localStorage.count;
	} else {
		document.getElementById("localClicks").innerHTML = "Please try again.";
	}

	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.onclick) {
			sessionStorage.onclick = Number(sessionStorage.onclick) + 1;
		} else {
			sessionStorage.onclick = 1;
		}

		document.getElementById("sessionClicks").innerHTML = "Your Session Storage Count: " + sessionStorage.onclick;
	} else {
		document.getElementById("sessionClicks").innerHTML = "Please try again.";
	}
}



function Reset() {
	window.localStorage.clear();
	location.reload();
}

// Function to store user input

function User() {
	var Name = document.getElementById("Name").value;
	var fruit = document.getElementById("fruit").value;
	var color = document.getElementById("color").value;


	var person = {Name: Name, fruit: fruit, color: color};

	localStorage.setItem('output', JSON.stringify(person));

	sessionStorage.setItem('output', JSON.stringify(person));

	document.getElementById("localStorageOutput").innerHTML = "You have entered the information!";
}

function Reveal() {
	var output = JSON.parse(localStorage.getItem('output'));

	var output2 = JSON.parse(sessionStorage.getItem('output'));

	document.getElementById("localStorageOutput").innerHTML = "<b>Local Storage Output</b> " + "<br>Name: " + output.Name + "<br>Favorite Fruit: " + output.fruit 
		+ "<br>Favorite Color: " + output.color;

	document.getElementById("sessionStorageOutput").innerHTML = "<br><b>Session Storage Output</b> " + "<br>Name: " + output2.Name + "<br>Favorite Fruit: " + output2.fruit
		+ "<br>Favorite Color: " + output2.color;
}