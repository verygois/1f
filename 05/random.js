const random = [
  "img/001.jpeg",
  "img/002.jpeg",
  "img/003.jpeg",
  "img/004.jpeg",
  "img/005.jpeg",
  "img/006.jpeg",
  "img/007.jpeg",
  "img/008.jpeg",
  "img/009.jpeg",
  "img/010.jpeg"
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
