"use strict";

var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elBtn = document.querySelector('.btn');
var elSpan = document.querySelector('.js-span');
var elList = document.querySelector('.js-list');
var record = new webkitSpeechRecognition();
record.lang = "uz-UZ";
var count = []; // console.log(record);

elBtn.addEventListener('click', function () {
  record.start();
}); // record.onend = function(){
//   console.log('-------------END-------------');
// }
// record.onerror  = function(){
//   console.log('error');
// }

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputVal = elInput.value;
  elInput.value = "";
  elList.innerHTML = "";
  count.push(inputVal);

  record.onresult = function (evt) {
    count.push(evt.results[0][0].transcript);
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = count[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var inputVal = _step.value;
      var newLi = document.createElement("li");
      newLi.textContent = inputVal; // newLi = yangi kiritma

      elList.appendChild(newLi);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}); // if(result == 'yashil'){
//   document.body.style.backgroundColor = "green"
// }
// else if(result == 'qizil'){
//   document.body.style.backgroundColor = "red"
// }
// else{
//   document.body.style.backgroundColor = "blue"
// }