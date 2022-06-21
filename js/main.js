var elForm = document.querySelector('.js-form')
var elInput = document.querySelector('.js-input')
var elBtn = document.querySelector('.btn')
var elSpan = document.querySelector('.js-span')
var elList = document.querySelector('.js-list')
var record = new webkitSpeechRecognition();

record.lang = "uz-UZ"
 var count = [];
// console.log(record);
elBtn.addEventListener('click', function(){

  record.start()

  
})

// record.onend = function(){
//   console.log('-------------END-------------');
// }

// record.onerror  = function(){

//   console.log('error');
// }


elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  var inputVal = elInput.value;

  elInput.value = "";

  elList.innerHTML = "";
  
    count.push(inputVal);
    record.onresult = function (evt) {

      count.push(evt.results[0][0].transcript);
    }
    
    for (var inputVal of count){

      var newLi = document.createElement("li");
      newLi.textContent = inputVal;
      // newLi = yangi kiritma
      elList.appendChild(newLi);
    
    }
  
})


// if(result == 'yashil'){
//   document.body.style.backgroundColor = "green"
// }
// else if(result == 'qizil'){
//   document.body.style.backgroundColor = "red"
// }
// else{
//   document.body.style.backgroundColor = "blue"
// }




