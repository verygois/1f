const four = [
  "/1f/04/01.jpg",
  "/1f/04/02.jpg",
  "/1f/04/03.jpg",
  "/1f/04/04.jpg",
  "/1f/04/05.jpg"
];

function randomFour(fourArray) {
  var four =
  fourArray[Math.floor(Math.random() * fourArray.length)];
  console.log(four);
  return four;
}
function sentenceGenerator() {
  var sentence = `<img src="${randomFour(four)}">`;
  document.querySelector(".four").innerHTML = sentence;
}
window.setInterval(function() {
  sentenceGenerator();
}, 500);
sentenceGenerator();
