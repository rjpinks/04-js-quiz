//PSEUDOCODE FOR BUTTON:
//First the user will click on the button causing an event listener to occur
    //A box/border will form around #userQuestion
    //The start button will transition into a buttom for questions
    //Click Start to Begin changes text to become the 1st question
    //4 buttons appear for possible answers
//Let's just try to implement this far first.


var startButton = $("#start-button");
var questionBox = $(".question-box");
var textInBox = $("textInBox");
var buttonHolder = $(".buttonHolder");
var plsWork = 0

function startingQuiz() {
    startButton.remove();
    textInBox.remove();
    var newP = $("p");
    newP.text("This would be the 1st question");
    newP.attr("class", "questionOne");
    questionBox.append(newP);
}

startButton.on("click", startingQuiz());