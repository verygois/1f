const random = [
    "/1f/05/001.jpeg",
    "/1f/05/002.jpeg",
    "/1f/05/003.jpeg",
    "/1f/05/004.jpeg",
    "/1f/05/005.jpeg",
    "/1f/05/006.jpeg",
    "/1f/05/007.jpeg",
    "/1f/05/008.jpeg",
    "/1f/05/009.jpeg",
    "/1f/05/010.jpeg",
    "/1f/05/011.jpeg",
    "/1f/05/012.jpeg",
    "/1f/05/013.jpeg"
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
  