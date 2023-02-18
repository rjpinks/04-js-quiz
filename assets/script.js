//PSEUDOCODE FOR BUTTON:
//First the user will click on the button causing an event listener to occur
    //A box/border will form around #userQuestion
    //The start button will transition into a buttom for questions
    //Click Start to Begin changes text to become the 1st question
    //4 buttons appear for possible answers
//Let's just try to implement this far first.


var startButton = $("#start-button");
var questionBox = $(".question-box");
var textInBox = $("usersQuestions");

function startingQuiz() {
    var newText = textInBox.text(textInBox.text().replace("Click Start to begin!", "This is the 1st question"));
    textInBox.text(newText);
    startButton.remove();
}

startButton.click(startingQuiz());