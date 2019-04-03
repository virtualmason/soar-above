'use strict';

var correct = 0;
var incorrect = 0;

var selectDisplay = document.getElementById('select');
var questionDisplay = document.getElementById('question');

var textArray = [
  {text: 'Question 1', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 2', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 3', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]}
];

var audioArray = [
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []},
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

// main function
function startQuiz(quizType) {
  console.log(quizType);
  

}

function selectText() {
  startQuiz('text');
  
}

function selectAudio() {
  startQuiz('audio');
}


document.getElementById('textQuiz').addEventListener('click', selectText);
document.getElementById('audioQuiz').addEventListener('click', selectAudio);