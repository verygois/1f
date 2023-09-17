'use strict'

const thisDescription = document.querySelector('meta[name="description"]').content;
const printBtn = document.querySelector('#print button')
printBtn.textContent = thisDescription;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  printBtn.addEventListener('click', function () {
    location.assign("print.pdf");
  });
} else {
  printBtn.addEventListener('click', function () {
    window.print();
  });
}

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
