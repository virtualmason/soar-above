


function choose(event){
  var eventValue = event.value;
  if(eventValue === 'text') {
    document.querySelector('.textQuizClass').classList.remove('hidden');
    document.querySelector('.audioQuizClass').classList.add('hidden');

  } else {
    document.querySelector('.audioQuizClass').classList.remove('hidden');
    document.querySelector('.textQuizClass').classList.add('hidden');

  }
  
}


// if (document.getElementById('audioQuiz').checked) {
//   alert('dd');
//   var rate_value = document.getElementById('audioQuiz').value;
// }
// alert(rate_value);