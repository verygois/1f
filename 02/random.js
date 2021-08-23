const two = [
    "/1f/02/01.jpg",
    "/1f/02/02.jpg",
    "/1f/02/03.jpg",
    "/1f/02/04.jpg",
    "/1f/02/05.jpg",
    "/1f/02/06.jpg",
    "/1f/02/07.jpg",
    "/1f/02/08.jpg",
    "/1f/02/09.jpg"
  ];
  
  function randomTwo(twoArray) {
    var two =
    twoArray[Math.floor(Math.random() * twoArray.length)];
    console.log(two);
    return two;
  }
  function sentenceGenerator() {
    var sentence = `<img src="${randomTwo(two)}">`;
    document.querySelector(".two").innerHTML = sentence;
  }
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  sentenceGenerator();
  