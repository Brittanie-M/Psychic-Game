//Computer's choices
var confusion = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Define starting variables for the game
var winner = 0;
var loser = 0;
var chances = 9;
var guesses = []; 
var choices = 0;

document.onkeyup = function(event) {

  // Alakazam (user)'s guess
    var alakazam = String.fromCharCode(event.keyCode);

  // Mewtwo's guess :)
    var mewtwoGuess = confusion[Math.floor(Math.random() * confusion.length)]; 

  // Logic to determine wins, losses, and display # of guesses and letters guessed
  var alakazam = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess

        var mewtwoGuess = confusion[Math.floor(Math.random()*confusion.length)]; //computer selects random letter
        guesses.push(alakazam); //pushing user guess to guesses so far
        
        if (alakazam == mewtwoGuess) {
            wins++;
            alert('Way to go! You\'ve guesesed corrrectly. You Won!');
            chances = 9; //reseting the guesses back to 9 so that the user can play again
            guesses.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
        }
        else if (chances == 0){
            losses++;
            alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
            chances = 9;
            guesses.length = 0;
        }
        else if (alakazam !== mewtwoGuess){
            chances--; //decrementing the guesses left
        }  

    // Variable to link to the HTML
    var html =
      "<p>You chose: " + alakazam + "</p>" +
      "<p>The computer chose: " + confusion + "</p>" +
      "<p>winner: " + winner + "</p>" +
      "<p>loser: " + loser + "</p>" +
      "<p>ties: " + ties + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  };
