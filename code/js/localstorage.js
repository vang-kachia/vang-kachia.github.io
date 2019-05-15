function reset() {
	window.localStorage.clear();
	location.reload();
}

function count() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		} else {
			localStorage.clickcount = 1;
		}

		document.getElementById("localResult").innerHTML = "Local Storage Count: " + localStorage.clickcount + " click(s)";
	} else {
		document.getElementById("localResult").innerHTML = "Error: Your browser does not support local storage.";
	}

	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.clicks) {
			sessionStorage.clicks = Number(sessionStorage.clicks) + 1;
		} else {
			sessionStorage.clicks = 1;
		}

		document.getElementById("sessionResult").innerHTML = "Session Storage Count: " + sessionStorage.clicks + " click(s)";
	} else {
		document.getElementById("sessionResult").innerHTML = "Error: Your browser does not support session storage.";
	}
}

function createUser() {
	var Name = document.getElementById("Name").value;
	var fruit = document.getElementById("fruit").value;
	var color = document.getElementById("color").value;


	var person = {Name: Name, fruit: fruit, color: color};

	localStorage.setItem('user', JSON.stringify(person));
	localStorage.setItem('browser-name', navigator.appCodeName);

	sessionStorage.setItem('user', JSON.stringify(person));
	sessionStorage.setItem('browser-name', navigator.appCodeName);

	document.getElementById("userOutputLocal").innerHTML = "Submission successful.";
}

function reveal() {
	var user = JSON.parse(localStorage.getItem('user'));
	var browserName = localStorage.getItem('browser-name');

	var user2 = JSON.parse(sessionStorage.getItem('user'));
	var browserName2 = sessionStorage.getItem('browser-name');

	document.getElementById("userOutputLocal").innerHTML = "Local Storage Output:" + "<br><b>Name:</b> " + user.Name + "<br><b>Favorite Fruit:</b> " + user.fruit 
		+ "<br><b>Favorite Color:</b>" + user.color + "<br><b>Browser Name:</b> " + browserName;

	document.getElementById("userOutputSession").innerHTML = "<br>Session Storage Output:" + "<br><b>Name:</b> " + user2.Name + "<br><b>Favorite Fruit:</b> " + user2.fruit
		+ "<br><b>Favorite Color:</b>" + user2.color + "<br><b>Browser Name:</b> " + browserName2;
}