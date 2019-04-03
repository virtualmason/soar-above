'use strict';

var correct = 0;
var incorrect = 0;

// binds to HTML 'main' elements; used for switching display
var selectDisplay = document.getElementById('select');
var questionDisplay = document.getElementById('question');

// array of questions for the text quiz
var textArray = [
  {text: 'Question 1', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 2', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 3', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Incorrect", "Incorrect", "Incorrect"]}
];

// array of questions for the audio quiz
var audioArray = [
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []},
  {src: '', answer: '', options: []}
];

// stores one of the above arrays, depending on which one was selected
var activeArray;

// results array, stores data from each question and will be stored locally
var results = [];

// get object properties and display on page (return answer property of object)
function displayQuestion(question) {
  console.log('display');

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

// main function, contains question loop
function startQuiz(quizType) {
  console.log(quizType);
  // main question loop, directs complex processes to other functions/subroutines
  for (var i = 0; i < activeArray.length; i++) {
    displayQuestion(activeArray[i]);
  }

}

// calls startQuiz with argument 'text' and changes display
function selectText() {
  activeArray = textArray;
  startQuiz('text');

  selectDisplay.style.display = 'none';
  questionDisplay.style.display = 'block';
}

// calls startQuiz with argument 'audio' and changes display
function selectAudio() {
  activeArray = audioArray;
  startQuiz('audio');

  selectDisplay.style.display = 'none';
  questionDisplay.style.display = 'block';
}

// event listeners for quiz select divs
document.getElementById('textQuiz').addEventListener('click', selectText);
document.getElementById('audioQuiz').addEventListener('click', selectAudio);