const random = [
    "/1f/04/img/001.JPG",
    "/1f/04/img/002.JPG",
    "/1f/04/img/003.JPG",
    "/1f/04/img/004.JPG",
    "/1f/04/img/005.JPG"
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
  