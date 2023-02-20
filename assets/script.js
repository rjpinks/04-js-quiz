//PSEUDOCODE FOR BUTTON:
//First the user will click on the button causing an event listener to occur
    //A box/border will form around #userQuestion
    //The start button will transition into a buttom for questions
    //Click Start to Begin changes text to become the 1st question
    //4 buttons appear for possible answers
//Let's just try to implement this far first.

//These are in the original HTMLK
var startButton = $("#start-button");
var questionBox = $(".question-box");
var textInBox = $("#textInBox");
var buttonHolder = $(".buttonHolder");

//Functions

function buttonMaker() {
    var newButton = document.createElement("button");
    var newContent = document.createTextNode("Answer");
    newButton.appendChild(newContent);
    newButton.classList("btn", "btn-danger");
    buttonHolder.append(newButton);
}

function startingQuiz() {
    startButton.text("Answer 1");
    textInBox.text("This would be the 1st question");
    buttonMaker();
    buttonMaker();
    buttonMaker();
}

// startButton.on("click", startingQuiz());

//Right now I am just trying to get the newButton to take on the the appropriate classes for styling
