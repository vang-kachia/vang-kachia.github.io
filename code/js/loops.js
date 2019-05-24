
function numberLoop() {
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
