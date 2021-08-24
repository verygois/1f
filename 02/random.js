const random = [
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
  window.setInterval(function() {
    sentenceGenerator();
  }, 1000);
  sentenceGenerator();
  