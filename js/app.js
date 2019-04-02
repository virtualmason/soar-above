
'use strict';


var correct = 0;
var incorrect = 0;

var questions = [
  {text: `This Iowan often nest in colonies,and in winter this bird feeds on left-over grain in fields</p><p> This bird breeds from late May to mid-August`, answer: 'snow goose', options: ['Blackpoll warbler', 'White-fronted Goose', 'Ross\'s Goose','snow goose']},
  {text: 'This bird feeds primarily on flying insects, but also on airborne spiders,has been recorded by pilots flying more than a mile above the surface,a superb aerialist, and only rarely seen at rest. It drinks on the wing, skimming the surface of the water with its beak ', answer: 'Chimney swift', options: ['Mourning dove, ', 'Yellow rail', 'Ovenbird','Chimney swift']},
  {text: 'Question 3', answer: 'Correct', options: ['Incorrect', 'Incorrect', 'Incorrect']},
  {text: 'Question 4', answer: 'Correct', options: ['Incorrect', 'Incorrect', 'Incorrect']}
];

var results = [];

// get object properties and display on page (return answer property of object)
function displayQuestion(question) {
  var text = question.text;
  // code to display on page will go here
  var displayText = document.querySelector('#questions');
  // console.log(displayText);
  displayText.innerHTML =text;
  // return question.answer;
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
//shows which button was clicked
function quizSelect() {
  var buttons = document.querySelectorAll('button');
  for(var button of buttons) {
    button.addEventListener('click',function(event){
      console.log(event.target.id, ' but')
    });

  }
  
}

// main function
function startQuiz() {
  var num = 0;
  // for (var i = 0; i < questions.length; i++) {
  // passes current queston as parameter, gets answer,
  displayQuestion(questions[num]);
  num++;
  // passes answer as parameter for verify(), and binds to result
  //var result = verify(displayQuestion(questions[i]));

  //}
  return 0;
}
quizSelect();

startQuiz();
