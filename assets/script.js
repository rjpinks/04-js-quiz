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
    textInBox.text("What is jquery?");
    buttonMaker("button0", "a newer version of javascript");
    // var button0 = $("#button0");
    buttonMaker("button1", "external library of stylings");
    // var button1 = $("#button1");
    buttonMaker("button2", "a way to call elements");
    // var button2 = $("#button2");
    buttonMaker("button3", 'javascript "slang"');
    // var button3 = $("#button3");
    return myTimer;
}

//Fuctions used regarding question 0
function rightAnswer0() {
    yourScore++
    textInBox.text("What array method adds a value to the end of the array?");
    button0.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    buttonMaker("button4", "array.concat()");
    buttonMaker("button5", "array.fill()");
    buttonMaker("button6", "array.pop()");
    buttonMaker("button7", "array.push()");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer0() {
    quizTimer = quizTimer - 5000;
    textInBox.text("What array method adds a value to the end of the array?");
    button0.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    buttonMaker("button4", "array.concat()");
    buttonMaker("button5", "array.fill()");
    buttonMaker("button6", "array.pop()");
    buttonMaker("button7", "array.push()");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return quizTimer;
}

//Functions for Question 1
function rightAnswer1() {
    yourScore++
    textInBox.text("Variables made in a function are available outside the function by default");
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    buttonMaker("button8", "FALSE");
    buttonMaker("button9", "TRUE");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer1() {
    quizTimer = quizTimer - 5000;
    textInBox.text("Variables made in a function are available outside the function by default");
    button4.remove();
    button5.remove();
    button6.remove();
    button7.remove();
    buttonMaker("button8", "FALSE");
    buttonMaker("button9", "TRUE");
    return quizTimer;
}

//Functions for question 2
function rightAnswer2() {
    yourScore++
    textInBox.text("What is the tree like structure that is manipulatable by JavaScript, which changes the HTML?");
    button8.remove();
    button9.remove();
    buttonMaker("button12", "API");
    buttonMaker("button13", "SSH");
    buttonMaker("button14", "DOM");
    buttonMaker("button15", "UI");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer2() {
    quizTimer = quizTimer - 5000;
    textInBox.text("What is the tree like structure that is manipulatable by JavaScript, which changes the HTML?");
    button8.remove();
    button9.remove();
    buttonMaker("button12", "API");
    buttonMaker("button13", "SSH");
    buttonMaker("button14", "DOM");
    buttonMaker("button15", "UI");
    return quizTimer;
}

//Functions for Question 3
function rightAnswer3() {
    yourScore++
    textInBox.text("What command is used to initiate conditional statements?");
    button12.remove();
    button13.remove();
    button14.remove();
    button15.remove();
    buttonMaker("button16", "if () {}");
    buttonMaker("button17", "for () {}");
    buttonMaker("button18", "else () {}");
    buttonMaker("button19", "if else () {}");
    $("#scoreBoard").text("Your Score: " + yourScore + "    " + yourInitials);
    return yourScore;
}

function wrongAnswer3() {
    quizTimer = quizTimer - 5000;
    textInBox.text("What command is used to initiate conditional statements?");
    button12.remove();
    button13.remove();
    button14.remove();
    button15.remove();
    buttonMaker("button16", "if () {}");
    buttonMaker("button17", "for () {}");
    buttonMaker("button18", "else () {}");
    buttonMaker("button19", "if else () {}");
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