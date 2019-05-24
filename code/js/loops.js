
function numberLoop() {
    var userInput = document.getElementById("userInput").value;
    var response;


    if (userInput < 1) {
    response = "Make sure the number is between 1-10.";
    }else if (userInput = 1) {
        response = "Try again!";
    } else if (userInput = 2) {
        response = "Sorry, try again!"; 
    } else if (userInput = 3) {
        response = "Guess another number."; 
    } else if (userInput = 4) {
        response = "Not quite.";
    } else if (userInput = 5) {
        response = "Oops, try again.";
    } else if (userInput = 6) {
        response = "Keep on guessing.";
    } else if (userInput = 7) {
         response = "Nope. Try again.";
    } else if (userInput = 8) {
        response = "YOU ARE CORRECT. THAT IS THE RIGHT NUMBER!";
    } else if (userInput = 9) {
        response = "That number is too high.";
    } else if (userInput = 10) {
        response = "Definitely, try again!";
    } else if (userInput < 11) {
        response = "you entered 10";                                                                                
    } else {
         response = "Make sure the number is between 1-10.";
    }
    document.getElementById('output').innerHTML = response;
        

        
    }
