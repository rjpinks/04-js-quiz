//These are in the original HTML
var startButton = $("#start-button");
var questionBox = $(".question-box");
var textInBox = $("#textInBox");
var buttonHolder = $(".buttonHolder");
var bodyEl = $("body");
var timerEl = $("#timerEl");
var scoreBoard = $("#scoreBoard");

//Time remaining and player score variables
var yourScore = 0
var quizTimer = 60000
var returnArray = [yourScore]

//Function used for setInterval()
function intervalBegins() {
    quizTimer = quizTimer - 1000;
    timerEl.text("Your remaining time: " + quizTimer + " milliseconds");
    if (quizTimer <= 0) {
        questionBox.text("You're out of time!");
        buttonHolder.remove();
    }
    return quizTimer;
}

//Functions needed to start the quiz

function buttonMaker(butNum, possibleAnswer) {
    var newButton = document.createElement("button");
    var newContent = document.createTextNode(possibleAnswer);
    newButton.appendChild(newContent);
    newButton.classList = "answer-button";
    newButton.id = butNum
    buttonHolder.append(newButton);
}

function startingQuiz() {
    startButton.remove();
    var myTimer = setInterval(intervalBegins, 1000);
    textInBox.text("Question 0");
    buttonMaker("button0", "answer0");
    // var button0 = $("#button0");
    buttonMaker("button1", "answer0");
    // var button1 = $("#button1");
    buttonMaker("button2", "answer0");
    // var button2 = $("#button2");
    buttonMaker("button3", "answer0");
    // var button3 = $("#button3");
    return myTimer;
}

//Fuctions used regarding question 0
function rightAnswer0() {
    yourScore++
    textInBox.text("Question 1");
    button0.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    buttonMaker("button4", "answer1");
    buttonMaker("button5", "answer1");
    buttonMaker("button6", "answer1");
    buttonMaker("button7", "answer1");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer0() {
    quizTimer = quizTimer - 5000;
    var newContent = document.createTextNode("Answer 1");
    textInBox.text("Question 1");
    button0.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    buttonMaker("button4", "answer1");
    buttonMaker("button5", "answer1");
    buttonMaker("button6", "answer1");
    buttonMaker("button7", "answer1");
    return quizTimer;
}

//Functions for Question 1
function rightAnswer1() {
    yourScore++
    textInBox.text("Question 2");
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    buttonMaker("button8", "answer2");
    buttonMaker("button9", "answer2");
    buttonMaker("button10", "answer2");
    buttonMaker("button11", "answer2");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer1() {
    quizTimer = quizTimer - 5000;
    textInBox.text("Question 2");
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    buttonMaker("button8", "answer2");
    buttonMaker("button9", "answer2");
    buttonMaker("button10", "answer2");
    buttonMaker("button11", "answer2");
    return quizTimer;
}

//Functions for question 2
function rightAnswer2() {
    yourScore++
    textInBox.text("Question 3");
    button8.remove();
    button9.remove();
    button10.remove();
    button11.remove();
    buttonMaker("button12", "answer3");
    buttonMaker("button13", "answer3");
    buttonMaker("button14", "answer3");
    buttonMaker("button15", "answer3");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer2() {
    quizTimer = quizTimer - 5000;
    textInBox.text("Question 3");
    button8.remove();
    button9.remove();
    button10.remove();
    button11.remove();
    buttonMaker("button12", "answer3");
    buttonMaker("button13", "answer3");
    buttonMaker("button14", "answer3");
    buttonMaker("button15", "answer3");
    return quizTimer;
}

//Functions for Question 3
function rightAnswer3() {
    yourScore++
    textInBox.text("Question 4");
    button12.remove();
    button13.remove();
    button14.remove();
    button15.remove();
    buttonMaker("button16", "answer4");
    buttonMaker("button17", "answer4");
    buttonMaker("button18", "answer4");
    buttonMaker("button19", "answer4");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer3() {
    quizTimer = quizTimer - 5000;
    textInBox.text("Question 4");
    textInBox.text("Question 4");
    button12.remove();
    button13.remove();
    button14.remove();
    button15.remove();
    buttonMaker("button16", "answer4");
    buttonMaker("button17", "answer4");
    buttonMaker("button18", "answer4");
    buttonMaker("button19", "answer4");
    return quizTimer;
}

//functions for last question
function rightAnswer4() {
    yourScore++;
    questionBox.text("You're finished!");
    buttonHolder.remove();
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer4() {
    questionBox.text("You're finished!");
    buttonHolder.remove();
}

//Page sans dynamicism
startButton.on("click", startingQuiz);
var yourInitials = prompt("Enter your intials");

//Question 0
$(document).on("click", "#button3", rightAnswer0);
$(document).on("click", "#button0", wrongAnswer0);
$(document).on("click", "#button1", wrongAnswer0);
$(document).on("click", "#button2", wrongAnswer0);

// Question 1
$(document).on("click", "#button4", wrongAnswer1);
$(document).on("click", "#button5", wrongAnswer1);
$(document).on("click", "#button6", wrongAnswer1);
$(document).on("click", "#button7", rightAnswer1);

// Question 2
$(document).on("click", "#button8", rightAnswer2);
$(document).on("click", "#button9", wrongAnswer2);
$(document).on("click", "#button10", wrongAnswer2);
$(document).on("click", "#button11", wrongAnswer2);

// Question 3
$(document).on("click", "#button14", rightAnswer3);
$(document).on("click", "#button13", wrongAnswer3);
$(document).on("click", "#button12", wrongAnswer3);
$(document).on("click", "#button15", wrongAnswer3);

// Question 4
$(document).on("click", "#button16", rightAnswer4);
$(document).on("click", "#button17", wrongAnswer4);
$(document).on("click", "#button18", wrongAnswer4);
$(document).on("click", "#button19", wrongAnswer4);