const random = [
  "01/001.jpg",
  "02/01.jpg",
  "03/img/000.jpg",
  "04/img/000.jpeg",
  "05/img/000.png",
  "kaisei/front/001.jpg",
  "kaisei/front/002.jpg",
  "kaisei/back/001.jpg",
  "kaisei/back/002.jpg",
  "kaisei/back/003.jpg"
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
