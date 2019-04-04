'use strict';

var correct = 0;
var incorrect = 0;

// binds to HTML 'main' elements; used for switching display
var selectDisplay = document.getElementById('select');
var questionDisplay = document.getElementById('question-main');

// question buttons
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var continueButton = document.getElementById('continue');
// array of questions for the text quiz
var textArray = [
  {text: 'This bird rests by clinging to vertical surfaces, as it is unable to perch like most other birds:', answer: 'Chimney Swift', options: ["Chimney Swift", "Common Nighthawk", "Virginia Rail", 'Horned Grebe']},
  {text: 'Which of the following birds flies approximately 2,000 miles over open water each year during migration?', answer: 'Blackpoll Warbler', options: ["Blackpoll Warbler", "Virginia Rail", "Common Nighthawk", "Ruffed Grouse"]},
  {text: 'This bird is also known in North America by it\'s nickname, "Specklebelly":', answer: 'Greater White-fronted Goose', options: ["Greater White-fronted Goose", "Black-billed Cuckoo", "Ruddy Duck", "Ovenbird"]},
  {text: 'These nocturnal birds eat primarily insects, and are often mistaken at night for bats due to their flight patterns:', answer: 'Common Nighthawk', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]},
  {text: 'Question 4', answer: 'Correct', options: ["Correct", "Incorrect", "Incorrect", "Incorrect"]}
];

// array of questions for the audio quiz
var audioArray = [
  {src: 'https://www.bird-sounds.net/sounds/1310.mp3', answer: 'Snow Goose', options: ['Snow Goose', 'Virginia Rail', 'Painted Bunting', 'Gadwall']},
  {src: 'https://www.bird-sounds.net/sounds/1012.mp3', answer: 'Common Nighthawk', options: ['Common Nighthawk', 'Yellow Rail', 'Ovenbird', 'Black-billed Cuckoo']},
  {src: 'https://www.bird-sounds.net/sounds/925.mp3', answer: 'Blackpoll Warbler', options: ['Blackpoll Warbler', 'Horned Grebe', 'Greater White-fronted Goose', 'Ruddy Duck']},
  {src: 'https://www.bird-sounds.net/sounds/994.mp3', answer: 'Chimney Swift', options: ['Chimney Swift', 'Ruffed Grouse', 'Snow Goose', 'Common Nighthawk']},
  {src: 'https://www.bird-sounds.net/sounds/913.mp3', answer: 'Black-billed Cuckoo', options: ['Black-billed Cuckoo', 'Yellow Rail', 'Painted Bunting', 'Mourning Dove']},
  {src: 'https://www.bird-sounds.net/sounds/1182.mp3', answer: 'Mourning Dove', options: ['Mourning Dove', 'Ovenbird', 'Gadwall', 'Virginia Rail']},
  {src: 'https://www.bird-sounds.net/sounds/1060.mp3', answer: 'Gadwall', options: ['Gadwall', 'Blackpoll Warbler', 'Ruffed Grouse', 'Chimney Swift']},
  {src: 'https://www.bird-sounds.net/sounds/1280.mp3', answer: 'Ruffed Grouse', options: ['Ruffed Grouse', 'Greater White-fronted Goose', 'Common Nighthawk', 'Gadwall']},
  {src: 'https://www.bird-sounds.net/sounds/705.mp3', answer: 'Horned Grebe', options: ['Horned Grebe', 'Black-billed Cuckoo', 'Yellow Rail', 'Ruddy Duck']},
  {src: 'https://www.bird-sounds.net/sounds/1277.mp3', answer: 'Ruby-throated Hummingbird', options: ['Ruby-throated Hummingbird', 'Blackpoll Warbler', 'Virginia Rail', 'Mourning Dove']}
];

// stores one of the above arrays, depending on which one was selected
var activeArray;
var quizType;

// results array, stores data from each question and will be stored locally
var results = [];

var currentQuestion = 0;
var currentAnswer;

// randomizes and sets text content for each question button
function buttonRandom(question) {
  var options = question.options; // options array that for loop iterates over
  var button; // current button in loop
  var buttons = []; // stores buttons from for loop to assign to button elements

  for (var i = 0; i < 4; i++) {
    button = options[Math.floor(Math.random()*options.length)];
    options.splice(options.indexOf(button), 1);
    buttons[i] = button;
  }

  button1.textContent = buttons[0];
  button2.textContent = buttons[1];
  button3.textContent = buttons[2];
  button4.textContent = buttons[3];
}


// get object properties and display on page (return answer property of object)
function displayQuestion(question, quizType) {
  //console.log(question);
  continueButton.style.display = 'none';
  var thisQuestion = document.getElementById('question');

  if (quizType === 'text') {
    thisQuestion.innerHTML = '<h3>' + question.text + '</h3>';
    buttonRandom(question);
  }
  else {
    thisQuestion.innerHTML = '<h3>What bird is this?</h3><audio controls src="' + question.src + '"></audio>';
    buttonRandom(question);
  }

  return question.answer;
}

function displayStats() {
  console.log(results);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < activeArray.length) {
    startQuiz(quizType, currentQuestion);
  }
  else {
    displayStats();
  }
}

var selectedButton;

// checks if selected answer is correct
function verify(userAnswer, button) {
  console.log(userAnswer);
  selectedButton = button;
  if (userAnswer === currentAnswer) {
    selectedButton.style.backgroundColor = 'green';
    results.push('correct');
    continueButton.style.display = 'inline-block';
  } else {
    selectedButton.style.backgroundColor = 'red';
    results.push('incorrect');
    continueButton.style.display = 'inline-block';
  }
}

function clickHandler(event) {
  verify(event.target.textContent, event.target);
}

// button event handlers
button1.addEventListener('click', clickHandler);
button2.addEventListener('click', clickHandler);
button3.addEventListener('click', clickHandler);
button4.addEventListener('click', clickHandler);
continueButton.addEventListener('click', nextQuestion);








// main function, contains question loop
function startQuiz(quizType, currentQuestion) {

  currentAnswer = displayQuestion(activeArray[currentQuestion], quizType);
  console.log('Question ' + (currentQuestion + 1));
}




// calls startQuiz with argument 'text' and changes display
function selectText() {
  activeArray = textArray;
  quizType = 'text';
  console.log(quizType);
  startQuiz(quizType, currentQuestion);

  selectDisplay.style.display = 'none';
  questionDisplay.style.display = 'block';
}

// calls startQuiz with argument 'audio' and changes display
function selectAudio() {
  activeArray = audioArray;
  quizType = 'audio';
  startQuiz(quizType, currentQuestion);

  selectDisplay.style.display = 'none';
  questionDisplay.style.display = 'block';
  console.log(quizType);
}

// event listeners for quiz select divs
document.getElementById('textQuiz').addEventListener('click', selectText);
document.getElementById('audioQuiz').addEventListener('click', selectAudio);