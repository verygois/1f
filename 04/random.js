const random = [
  "img/001.JPG",
  "img/002.JPG",
  "img/003.JPG",
  "img/004.JPG",
  "img/005.JPG"
];

function randomImg(randomArray) {
  var random =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  console.log(random);
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
