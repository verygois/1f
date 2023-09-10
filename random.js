'use strict'

function randomImg(randomArray) {
  var random =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  return random;
}
function sentenceGenerator() {
  var sentence = `<img src="${randomImg(random)}">`;
  document.querySelector(".random").innerHTML = sentence;
}
window.setInterval(function () {
  sentenceGenerator();
}, 1000);
sentenceGenerator();
