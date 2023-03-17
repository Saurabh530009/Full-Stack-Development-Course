// alert("Hi");  to check that javascript file is included in html file
var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  //   alert(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  alert(randomNumber + randomChosenColor);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColor);
}

function handlerFunction() {
  // print this to check correct click button
  // console.log(this);

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColor = $(this).attr("id");
  // console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
}

//  Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").on("click", handlerFunction);

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Add animation to user click

function animatePress(currentColor) {
  // Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //   use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
