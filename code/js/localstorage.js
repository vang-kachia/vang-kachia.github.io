function Reset() {
	window.localStorage.clear();
	location.reload();
}

function Count() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}

		document.getElementById("localClicks").innerHTML = "Your Local Storage Count: " + localStorage.clickcount + " click(s)";
	} else {
		document.getElementById("localClicks").innerHTML = "Error: Your browser does not support local storage.";
	}

	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.clicks) {
			sessionStorage.clicks = Number(sessionStorage.clicks) + 1;
		} else {
			sessionStorage.clicks = 1;
		}

		document.getElementById("sessionClicks").innerHTML = "Your Session Storage Count: " + sessionStorage.clicks;
	} else {
		document.getElementById("sessionClicks").innerHTML = "Error: Your browser does not support session storage.";
	}
}

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