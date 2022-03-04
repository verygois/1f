const random = [
    "/1f/05/img/001.jpeg",
    "/1f/05/img/002.jpeg",
    "/1f/05/img/003.jpeg",
    "/1f/05/img/004.jpeg",
    "/1f/05/img/005.jpeg",
    "/1f/05/img/006.jpeg",
    "/1f/05/img/007.jpeg",
    "/1f/05/img/008.jpeg",
    "/1f/05/img/009.jpeg",
    "/1f/05/img/010.jpeg"
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
  