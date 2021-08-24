const random = [
    "/1f/kaisei/book/001.jpeg",
    "/1f/kaisei/book/002.jpeg",
    "/1f/kaisei/book/003.jpeg",
    "/1f/kaisei/book/004.jpeg",
    "/1f/kaisei/book/005.jpeg",
    "/1f/kaisei/book/006.jpeg",
    "/1f/kaisei/book/007.jpeg",
    "/1f/kaisei/book/008.jpeg",
    "/1f/kaisei/book/009.jpeg",
    "/1f/kaisei/book/010.jpeg",
    "/1f/kaisei/book/011.jpeg",
    "/1f/kaisei/book/012.jpeg",
    "/1f/kaisei/book/013.jpeg",
    "/1f/kaisei/book/014.jpeg",
    "/1f/kaisei/book/015.jpeg",
    "/1f/kaisei/book/016.jpeg"
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
  