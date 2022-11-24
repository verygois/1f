const random = [
    "book/001.jpeg",
    "book/002.jpeg",
    "book/003.jpeg",
    "book/004.jpeg",
    "book/005.jpeg",
    "book/006.jpeg",
    "book/007.jpeg",
    "book/008.jpeg",
    "book/009.jpeg",
    "book/010.jpeg",
    "book/011.jpeg",
    "book/012.jpeg",
    "book/013.jpeg",
    "book/014.jpeg",
    "book/015.jpeg",
    "book/016.jpeg"
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
