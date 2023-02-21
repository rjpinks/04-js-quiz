//These are in the original HTML
var startButton = $("#start-button");
var questionBox = $(".question-box");
var textInBox = $("#textInBox");
var buttonHolder = $(".buttonHolder");
var bodyEl = $("body");

//Time remaining and player score variables
var yourScore = 0
var quizTimer = 30
var returnArray = [yourScore]

//There was probably an easier way of doing this, but these are all the answer buttons that will appear in the quiz
// var button0 = $("#button0");
// var button1 = $("#button1");
// var button2 = $("#button2");
// var button3 = $("#button3");
// var button4 = $("#button4");
// var button5 = $("#button5");
// var button6 = $("#button6");
// var button7 = $("#button7");
// var button8 = $("#button8");
// var button9 = $("#button9");
// var button10 = $("#button10");
// var button11 = $("#button11");
// var button12 = $("#button12");
// var button13 = $("#button13");
// var button14 = $("#button14");
// var button15 = $("#button15");
// var button16 = $("#button16");
// var button17 = $("#button17");
// var button18 = $("#button18");
// var button19 = $("#button19");

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
    textInBox.text("Question 0");
    buttonMaker("button0", "answer0");
    // var button0 = $("#button0");
    buttonMaker("button1", "answer0");
    // var button1 = $("#button1");
    buttonMaker("button2", "answer0");
    // var button2 = $("#button2");
    buttonMaker("button3", "answer0");
    // var button3 = $("#button3");
    var scoreBoard = document.createElement("p");
    var newContent = document.createTextNode("Your Score: " + yourScore + "    " + yourInitials);
    scoreBoard.appendChild(newContent);
    scoreBoard.id = "scoreBoard"
    bodyEl.append(scoreBoard);
    return yourScore;
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
    //timer loses time
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
    //timer loses time
    textInBox.text("Question 2");
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    buttonMaker("button8", "answer2");
    buttonMaker("button9", "answer2");
    buttonMaker("button10", "answer2");
    buttonMaker("button11", "answer2");
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
    //timer decreases
    textInBox.text("Question 3");
    button8.remove();
    button9.remove();
    button10.remove();
    button11.remove();
    buttonMaker("button12", "answer3");
    buttonMaker("button13", "answer3");
    buttonMaker("button14", "answer3");
    buttonMaker("button15", "answer3");
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
    //timer decreases
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
}

//functions for last question
function rightAnswer4() {
    yourScore++;
    questionBox.remove();
    buttonHolder.remove();
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer4() {
    questionBox.remove();
    buttonHolder.remove();
}

//Page sans dynamicism
startButton.on("click", startingQuiz);
var yourInitials = prompt("Enter your intials");

//THERE NEEDS TO BE AN IF STATEMENT HERE REGARDING WHEN THE TIMER REACHES ZERO!
//if ()

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

