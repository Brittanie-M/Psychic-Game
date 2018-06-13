var confusion = ["b", "r", "q", "k", "f", "m", "x"];

var winner = 0;
var loser = 0;
var guesses = 0;
var choices = 0;

document.onkeyup = function(event) {

  // Determines which key was pressed.
var alakazam = event.key; 

  // Randomly chooses a choice from the options array. This is the Computer's guess.
var mewtwoGuess = confusion[Math.floor(Math.random() * confusion.length)];

  // Reworked our code from last step to use "else if" instead of lots of if statements.

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if ((alakazam === "b") || (alakazam === "r") || (alakazam === "q") (alakazam === "k") (alakazam === "f") (alakazam === "m") (alakazam === "x")) {

      if ((alakazam === "r") && (confusion === "s")) {
      wins++;
    } else if ((alakazam === "r") && (confusion === "p")) {
      losses++;
    } else if ((alakazam === "s") && (confusion === "r")) {
      losses++;
    } else if ((alakazam === "s") && (confusion === "p")) {
      wins++;
    } else if ((alakazam === "p") && (confusion === "r")) {
      wins++;
    } else if ((alakazam === "p") && (confusion === "s")) {
      losses++;
    } else if (alakazam === confusion) {
      ties++;
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
      "<p>You chose: " + alakazam + "</p>" +
      "<p>The computer chose: " + confusion + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>ties: " + ties + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
  }
};