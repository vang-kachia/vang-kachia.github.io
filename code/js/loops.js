// JavaScript file for loops

// Conditional Statement

function numberGame() {
    var userInput = document.getElementById("userInput").value;
    var userResponse;


    if (userInput < 2) {
        userResponse = "Try again.";
    } else if (userInput < 3) {
        userResponse = "Sorry, try again!"; 
    } else if (userInput < 4) {
        userResponse = "Guess another number."; 
    } else if (userInput < 5) {
        userResponse = "Not quite.";
    } else if (userInput < 6) {
        userResponse = "Oops, try again.";
    } else if (userInput < 7) {
        userResponse = "Keep on guessing.";
    } else if (userInput < 8) {
        userResponse = "Nope. Try again.";
    } else if (userInput < 9) {
        userResponse = "YOU ARE CORRECT. THAT IS THE RIGHT NUMBER!";
    } else if (userInput < 10) {
        userResponse = "That number is too high.";
    } else if (userInput < 11) {
        userResponse = "Definitely, try again!";                                                                              
    } else {
        userResponse = "That number is out of range.";
    }
    document.getElementById('numberOutput').innerHTML = userResponse;
         }

//  Loops, Functions, Variables

function fruitLoop() {
        var fruits = ["Mango", "Guava", "Dragonfruit", "Coconut", "Lychee"];
        var text = "";
        var i;
        for(i = 0; i < fruits.length; i++) {
            text += fruits[i] + "<br>";
        }
        document.getElementById("fruitOutput").innerHTML = text;
    }

// Associative Arrays

function infoArray() {
    var season = document.getElementById("season").value;
	var movie = document.getElementById("movie").value;
	var drink = document.getElementById("drink").value;

// Output the information that was entered
	var arrayOutput = {"season": season, "movie": movie, "drink": drink};

	document.getElementById("arrayOutput").innerHTML = "{Season: " + arrayOutput["season"]
		+ ", Movie: " + arrayOutput["movie"] + ", Drink: " + arrayOutput["drink"] + "}";
}

// Parameters and Arrays

function paramArrays() {
    var numArray = parseInt(prompt("Enter the number of your array!"));

    if (isNaN(numArray)) {
        document.getElementById("paramOutputt").innerHTML = "Click the button and try again."
    } else {
        var input = paramCreated(numArray);
    }

    var paramSort = sort(input);
    var paramRange = Range(input);
 document.getElementById("arrayOutput").innerHTML = "Here is your array: " + "[" + paramSort + "]";
 document.getElementById("rangeOutput").innerHTML = "Here is the range of your array: " + paramRange;

}

function Range(list) {
	var firstValue = list[0];
	var lastValue = list[list.length - 1];
	var range = lastValue - firstValue;

	return range;
}
