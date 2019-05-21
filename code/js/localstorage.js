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

function User() {
	var Name = document.getElementById("Name").value;
	var fruit = document.getElementById("fruit").value;
	var color = document.getElementById("color").value;


	var person = {Name: Name, fruit: fruit, color: color};

	localStorage.setItem('user', JSON.stringify(person));

	sessionStorage.setItem('user', JSON.stringify(person));

	document.getElementById("userOutputLocal").innerHTML = "You have entered the information!";
}

function Reveal() {
	var user = JSON.parse(localStorage.getItem('user'));

	var user2 = JSON.parse(sessionStorage.getItem('user'));

	document.getElementById("userOutputLocal").innerHTML = "Local Storage Output:" + "<br><b>Name:</b> " + user.Name + "<br><b>Favorite Fruit:</b> " + user.fruit 
		+ "<br><b>Favorite Color:</b>" + user.color;

	document.getElementById("userOutputSession").innerHTML = "<br>Session Storage Output:" + "<br><b>First Name:</b> " + user2.Name + "<br><b>Favorite Fruit:</b> " + user2.fruit
		+ "<br><b>Favorite Color:</b>" + user2.color;
}