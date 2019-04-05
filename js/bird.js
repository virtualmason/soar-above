'use strict';
function filter(check){
  var dataList = document.querySelectorAll('[data-bird]');
  for(var i =0; i < dataList.length; i++) {
    var currentDivData = dataList[i].getAttribute('data-bird');
    if(check.id === 'all') {
      location.reload();
    }
    if(currentDivData !== check.id) {
      dataList[i].classList.add('hide');
    } else {
      dataList[i].classList.remove('hide');
    }
  }   
}