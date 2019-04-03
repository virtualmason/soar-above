
// 'use strict';


// var quizArray = [
//   {text: `1.  This Iowan often nest in colonies,and in winter this bird feeds on left-over grain in fields</p><p> This bird breeds from late May to mid-August. <p>Which bird is it hugh?</p>`, answer: 'Snow Goose',yourAnswer: '', trueFalse:'', options: ['Blackpoll Warbler', 'White-fronted Goose', 'Ross\'s Goose','Snow Goose']},
//   {text: `<p>2.  THis bird is very elusive and seldom seen</p><p>It's nest is a shallow cup built with marsh vegetation on damp ground under a canopy of dead plants</p><p>eggs are creamy, and spotted with both reddish spots that form a ring at one end</p> <p>Which bird is it hugh?</p> `, answer: 'Yellow rail', yourAnswer: '',  trueFalse:'', options: ['Yellow rail', 'Ruby-throated hummingbird', 'Ovenbird','Chimney Swift']},
//   {text: `<p>3.  This bird 2.8 to 3.5 inches long</p>,<p>spending most of the winter in Florida, southern Mexico and Central America,[9] as far south as extreme western Panama, and the West Indies.</p> <p>backward, and to hover in mid-air`,answer: 'Ruby-throated hummingbird', yourAnswer: '', trueFalse:'', options: ['Painted Bunting', 'Ruby-throated hummingbird', 'Ovenbird','Horned grebe']},
//   {text: `<p>4.  This bird is a superb aerialist, and only rarely seen at rest.It can fly 10 months non stop. It drinks on the wing, skimming the surface of the water with its beak</p> <p>has been recorded by pilots flying more than a mile above the surface<p>Which bird is it hugh?</p> `, answer: 'Chimney Swift', yourAnswer: '', trueFalse:'', options: ['Mourning Dove', 'Yellow Rail', 'Ovenbird','Chimney Swift']},
//   {text: `<p>5.  The peregrine falcon can fly straight-away at 60 mph.  When they fold their wings and go into a dive (stoop), how fast can they go?</p>`, answer: '260mph', yourAnswer: '', trueFalse: '', options: ['120mph', '180mph', '260mph', '320mph']},
//   {text: `<p>6.  What bird is the international symbol of happiness?</p>`, answer: 'The Bluebird', yourAnswer: '', trueFalse: '', options: ['The Hummingbird', 'The Bluebird', 'The Oriole', 'The Cardinal']},
//   {text: `<p>7.  The peregrine falcon can see a pigeon flying in the sky how far away?</p>`, answer: 'Over 5 miles', yourAnswer: '', trueFalse: '', options: ['Just under 1 mile', 'About 1-2 miles', 'About 2-3 miles', 'Over 5 miles']},
//   {text: `<p>8.  Which of the following facts about hummingbirds is FALSE?</p>`, answer: 'It\'s brain is proportionally smaller than the average bird', yourAnswer: '', trueFalse: '', options: ['It\'s brain is proportionally smaller than the average bird', 'It\'s wings can flap 20-70 times per second', 'The only bird that can fly backwards and upside down', 'It can\'t walk or hop']},
//   {text: `<p>9.  Approximately how old is a bald eagle when its head turns completely white?</p>`, answer: 'Five years old', yourAnswer: '', trueFalse: '', options: ['One year old', 'Three years old', 'Five years old', 'Seven years old']},
//   {text: `<p>10.  The eastern goldfinch is the state bird of Iowa and what other state?</p>`, answer: 'New Jersey', yourAnswer: '', trueFalse: '', options: ['Indiana', 'New Jersey', 'Pensylvania', 'South Carolina']},
// ];
// var correct = 0;
// var incorrect = 0;
// var num = 0;
// var currentQuiz;
// var displayText = document.querySelector('#questions');
// var buttons = document.querySelectorAll('button');


// // get object properties and display on page (return answer property of object)
// function displayQuestion(QuizQuestion) {
//   // code to display buttons and questions on page will go here
//   var text = QuizQuestion.text;
//   var buttonOne = document.querySelector('#buttonOne');
//   var buttonTwo = document.querySelector('#buttonTwo');
//   var buttonThree = document.querySelector('#buttonThree');
//   var buttonFour = document.querySelector('#buttonFour');

//   // console.log(displayText);questions[0].options[0
//   displayText.innerHTML = text;
//   buttonOne.innerHTML = QuizQuestion.options[0];
//   buttonTwo.innerHTML = QuizQuestion.options[1];
//   buttonThree.innerHTML = QuizQuestion.options[2];
//   buttonFour.innerHTML = QuizQuestion.options[3];
//   currentQuiz = QuizQuestion;
//   return QuizQuestion;
// }

// // checks if selected answer is correct, returns bool to startQuiz
// function verify(clickedAnswer) {
//   if(clickedAnswer === currentQuiz.answer) {
//     correct++;
//     currentQuiz.trueFalse ='true';
//     var isCorrect = true;
//     // document.querySelector("'#'+clickedAnswer");
//     num++;
//     console.log(num, quizArray.length);
//     if(num  === quizArray.length) {
//       displayStats();
//     } else{
//       startQuiz();
//     }
//   } else {
//     isCorrect ='false';
//     incorrect++;
//     currentQuiz.trueFalse ='false';
//     num++;
//     if(num  === quizArray.length) {
//       displayStats();
//     } else{
//       startQuiz();
//     }
//   }


//   return isCorrect;
// }

// // displays count of correct and incorrect, possibly more info in future
// function displayStats() {
//   // if(num === quizArray.length) {
//   displayText.innerHTML =`<pre> 
//        You got ${correct} answer right and ${incorrect} wrong.                             
//     </pre>`;
//   // }

// }


// //shows which button was clicked
// function quizSelect(event) {
//   var buttonTextValue = event.target.innerText;
//   verify(buttonTextValue);
// }

// function startQuiz() {
//   for(var button of buttons) {
//     button.addEventListener('click', quizSelect);
//   }
//   displayQuestion(quizArray[num]);
  
// }
// //quizSelect();

// startQuiz();
