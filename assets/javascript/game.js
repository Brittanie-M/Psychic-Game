//Prefacing this by saying that I had a little fun with the variable names :)

//Computer's choices
var confusion = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Define starting variables for the game
var winner = 0;
var loser = 0;
var chances = 9;
var guesses = []; 


  /* Logic to determine wins, losses, 
  and display # of guesses and letters guessed */

  document.onkeyup = function(event) {

    // user's guess
    var psychic = String.fromCharCode(event.keyCode).toLowerCase();

    // Mewtwo's guess :)
    var mewtwoGuess = confusion[Math.floor(Math.random() * confusion.length)]; 

    //pushing user guess to var guesses
    guesses.push(psychic); 

    if (psychic == mewtwoGuess) {
      winner++;
      alert( "How can this be?" );
      //resetting chances back to 9
      chances = 9; 
      //resets the guesses array
      guesses.length = 0; 
}
    else if (chances == 0){
      loser++;
      alert( "You will never defeat me!" );
      chances = 9;
      guesses.length = 0;
}
    else if (psychic !== mewtwoGuess){
      chances--; //decreases var chances
}  
// Variable to link to the HTML
var html = 
"<h1> The Psychic Game: Can You Beat Mewtwo? </h1>" +
"<h2> The game begins when you guess a letter foolish human.. </h2>" +
"<p> Wins: " + winner + "</p>" +
"<p> Losses: " + loser + "</p>" +
"<p> Guesses Left: " + chances + "</p>" +
"<p> Your Guesses so far: " + guesses + "</p>";

// Placing the html into the game ID
document.querySelector('#game').innerHTML = html;

  } 