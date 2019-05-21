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

		document.getElementById("sessionClicks").innerHTML = "Your Session Storage Count: " + sessionStorage.clicks + " click(s)";
	} else {
		document.getElementById("sessionClicks").innerHTML = "Error: Your browser does not support session storage.";
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

	document.getElementById("localStorageOutput").innerHTML = "Local Storage Output:" + "<br>Name:" + user.Name + "<br>Favorite Fruit:" + user.fruit 
		+ "<br>Favorite Color:" + user.color;

	document.getElementById("sessionStorageOutput").innerHTML = "<br>Session Storage Output:" + "<br>First Name:" + user2.Name + "<br>Favorite Fruit:" + user2.fruit
		+ "<br>Favorite Color:" + user2.color;
}