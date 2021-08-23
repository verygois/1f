const contents = [
  "/1f/04/01.jpg",
  "/1f/04/02.jpg",
  "/1f/04/03.jpg",
  "/1f/04/04.jpg",
  "/1f/04/05.jpg"
];

function randomFour(contentsArray) {
  var contents =
    contentsArray[Math.floor(Math.random() * contentsArray.length)];
  console.log(contents);
  return contents;
}
function sentenceGenerator() {
  var sentence = `<img src="${randomFour(contents)}">`;
  document.querySelector(".four").innerHTML = sentence;
}
window.setInterval(function() {
  sentenceGenerator();
}, 500);
sentenceGenerator();
