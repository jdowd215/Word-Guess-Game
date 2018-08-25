// Use Cases:
// Use #1: User loads the page
    // --> display underscores according to the randomly chosen word
    // --> display guessesRemaining, wins, and losses
// Use #2: User clicks a letter between a-z
    // --> if user guesses a letter that's in the word, display the letter in its appropriate position, 
    // else user guesses remaining go down by 1.  If guesses remaining equal 0, user loses.  Increase losses by 1
    // --> if the user guesses all the correct letters in the word, they win. Increase wins by 1


// ===== VARIABLES ===== //
// variables declared on page load
var wordBank = [        // Word list
    "olympia",
    "salem",
    "denver",
    "phoenix",
    "topeka",
    "juneau",
    "austin",
    "boston",
];
//player wins
var wins = 0;
//player losses
var losses = 0;
// max number of tries player has
var maxGuesses = 10;
// stores letters user has guessed
var guessedLetters = [];
// randomly chosen word from our wordBank:
var currentWord;
// actual word being guessed by player;
var chosenWord = [];
// how many tries a player has remaining
var remainingGuesses = 0;
//# of underscores in chosen word
var gameStart = false;
// flag for "press any key to play again"
var finished = false;



// ===== FUNCTIONS ===== //
//reset game variables
function resetGame(){
    guessesRemaining = maxGuesses;
    gameStart = false;
    // randomly choose a word from our wordBank
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // ex: 
    // input --> currentWord = 'seattle'
    // define the length of currentWord

    //clear out arrays
    var guessedLetters = [];
    var chosenWord = [];

    //select guessing word
    for (var i = 0; i < wordBank[currentWord].length; i++) {
        chosenWord.push("_");
    }
    
    // add underscores to the underscores array according to the length of the word
    // TODO:
    // we need to write syntax using the currentWord as our input and this should output an 
    // array of underscores according to the length of the currentWord
    // output --> ['_', '_', '_', '_', '_', '_', '_']
    // convert the underscore array into a string
    // select the html and display our underscores
    // display guessesRemaining, wins, and losses
    // }


// ===== EVENT LISTENERS ===== // 
// on page load execute our reset function
// reset()
// use document.onKeyUp = function (event){
    // store userGuess in a variable
    // userInput = <value from the event object>

    // ex:
    // currentWord = 'seattle'
    // userInput = 's'

    // if the user guesses a correct letter
    // check to see if userInput equals a letter in the array
        //google search: 'how to check to see if a character exists in a string?'
    // if(){
        // update the underscores array
        // output --> ['s', '_', '_', '_', '_', '_', '_']
        //}
    //else{
            // push the wrong letter inside our wrongGuesses array
            // decrement guessesRemaining by one
        //}
    
//}