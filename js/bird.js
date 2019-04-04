'use strict';
function filter(event){
  // console.log(event.id);
  var dataList = document.querySelectorAll('[data-bird]');

  for(var i =0; i < dataList.length; i++) {
    // console.log(dataList[i]);
    var currentDivData = dataList[i].getAttribute('data-bird');
      
    console.log('line 9 ', currentDivData);

    if(currentDivData === event.id) {
      
      console.log('line 14 ',dataList[i]);
      //  document.getElementById('show').innerHTML = dataList[i];
      // document.getElementById('show').append(dataList[i]);
    } else {
      dataList[i].classList.add('hide');
    }
  }
  //  console.log(dataList);
   
}