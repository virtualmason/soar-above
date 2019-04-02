
'use strict';


var quizArray = [
  {text: `This Iowan often nest in colonies,and in winter this bird feeds on left-over grain in fields</p><p> This bird breeds from late May to mid-August. <p>Which bird is it hugh?</p>`, answer: 'Snow Goose', options: ['Blackpoll Warbler', 'White-fronted Goose', 'Ross\'s Goose','Snow Goose']},
  {text: `<p>This bird feeds primarily on flying insects, but also on airborne spiders,has been recorded by pilots flying more than a mile above the surface</p>,<p>a superb aerialist, and only rarely seen at rest. It drinks on the wing, skimming the surface of the water with its beak</p> <p>Which bird is it hugh?</p> `, answer: 'Chimney Swift', options: ['Mourning Dove', 'Yellow Rail', 'Ovenbird','Chimney Swift']},
  {text: 'Question 3', answer: 'Correct', options: ['Incorrect', 'Incorrect', 'Incorrect']},
  {text: 'Question 4', answer: 'Correct', options: ['Incorrect', 'Incorrect', 'Incorrect']}
];
var correct = 0;
var incorrect = 0;
var num = 0;
var currentQuiz;
var results = [];
var buttons = document.querySelectorAll('button');
for(var button of buttons) {
  button.addEventListener('click', quizSelect);
}
// get object properties and display on page (return answer property of object)
function displayQuestion(QuizQuestion) {
  console.log(QuizQuestion, '22');
  var text = QuizQuestion.text;
  // code to display buttons and questions on page will go here
  var displayText = document.querySelector('#questions');
  var buttonOne = document.querySelector('#buttonOne');
  var buttonTwo = document.querySelector('#buttonTwo');
  var buttonThree = document.querySelector('#buttonThree');
  var buttonFour = document.querySelector('#buttonFour');

  // console.log(displayText);questions[0].options[0
  displayText.innerHTML =text;
  buttonOne.innerHTML = QuizQuestion.options[0];
  buttonTwo.innerHTML = QuizQuestion.options[1];
  buttonThree.innerHTML = QuizQuestion.options[2];
  buttonFour.innerHTML = QuizQuestion.options[3];
  currentQuiz = QuizQuestion;
  return QuizQuestion;
}

// checks if selected answer is correct, returns bool to startQuiz
function verify(clickedAnswer) {
  console.log('verify', currentQuiz.answer );
  if(clickedAnswer === currentQuiz.answer) {
    correct++;
    var isCorrect = true;
    alert('true');
    startQuiz();
  } else {
    isCorrect =false;
    incorrect++;
    startQuiz();
  }


  return isCorrect;
}

// displays count of correct and incorrect, possibly more info in future
function displayStats() {

}

function thisResult() {

}
//shows which button was clicked
function quizSelect(event) {
  var buttonTextValue = event.target.innerText;
  verify(buttonTextValue);
  // var buttons = document.querySelectorAll('button');
  // for(var button of buttons) {
  //   button.addEventListener('click',function(event){
  //     var buttonTextValue = event.target.innerText;
  //     console.log(event.target.innerText, ' text of button clicked');
  //     verify(buttonTextValue);
  //   });
  

}


function startQuiz() {
  console.log('num ', num);
  
  displayQuestion(quizArray[num]);
  num++;
  return 0;

  // var num = 0;
  // for (var i = 0; i < questions.length; i++) {
  // passes current queston as parameter, gets answer,
  //works
  // passes answer as parameter for verify(), and binds to result
  //var result = verify(displayQuestion(questions[i]));

  //}
}
//quizSelect();

startQuiz();
