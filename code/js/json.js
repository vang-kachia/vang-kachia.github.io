// File: json.js

function jsonBig() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "jsonfiles/jsonAnFile.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
                jsonDisplay += "<p>Animal: " + response[i].animal + "<br>Name: " + response[i].name + "<br>Food: " + response[i].food 
				+ "<br>Activity: " + response[i].activity + "<br>Location: " + response[i].location;
			}
            document.getElementById("jsonAnOutput").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 5);
            document.getElementById("jsonStringAnOutput").innerHTML = "<hr><p><b>String Output</b></p><pre>" + jsonString + "</pre>";
		}
	}
	        xhr.send();
}

function jsonSmall() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "jsonfiles/jsonAnFile2.json", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			var jsonDisplay = "";

			for (var i = 0; i < response.length; i++) {
                jsonDisplay += "<p>Animal: " + response[i].animal + "<br>Name: " + response[i].name + "<br>Food: " + response[i].food 
				+ "<br>Activity: " + response[i].activity + "<br>Location: " + response[i].location;
			}
			document.getElementById("jsonAnOutput").innerHTML = jsonDisplay;

			var jsonString = JSON.stringify(response, null, 4);

			document.getElementById("jsonStringAnOutput").innerHTML = "<hr><p><b>JSON to a String</b></p><pre>" + jsonString + "</pre>";
		}
	}
	xhr.send();
}