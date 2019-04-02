
'use strict';


function wired() {
  alert('app.js');
}
var correct = 0;
var incorrect = 0;

var questions = [
  {text: 'Question 1', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 2', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 3', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]}
];

var results = [];

// get object properties and display on page (return answer property of object)
function displayQuestion(question) {
  var text = question.text;
  // code to display on page will go here
  return question.answer;
}

// checks if selected answer is correct, returns bool to startQuiz
function verify(result) {
  var isCorrect;


  return isCorrect;
}

// displays count of correct and incorrect, possibly more info in future
function displayStats() {

}

function thisResult() {

}

function quizSelect() {

}

// main function
function startQuiz() {
  for (var i = 0; i < questions.length; i++) {
    // passes current queston as parameter, gets answer,
    // passes answer as parameter for verify(), and binds to result
    var result = verify(displayQuestion(questions[i]));

  }
  return 0;
}

quizSelect();

console.log(startQuiz());
