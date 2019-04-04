'use strict';
function filter(check){
  // console.log(event.id);
  var dataList = document.querySelectorAll('[data-bird]');
 console.log(dataList);
  for(var i =0; i < dataList.length; i++) {
    // console.log(dataList[i]);
    var currentDivData = dataList[i].getAttribute('data-bird');
      
    console.log(check.id, ' id');

    if(currentDivData !== check.id) {
      dataList[i].classList.add('hide');

      console.log('line 14 ',dataList[i]);
   
  
    //   // dataList[i].classList.add('hide');
    } else {
      dataList[i].classList.remove('hide');
    }
  }
  //  console.log(dataList);
   
}