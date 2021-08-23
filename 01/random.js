const one = [
    "/1f/01/001.jpg",
    "/1f/01/002.jpg",
    "/1f/01/003.jpg",
    "/1f/01/004.jpg"
  ];
  
  function randomOne(oneArray) {
    var one =
    oneArray[Math.floor(Math.random() * oneArray.length)];
    console.log(one);
    return one;
  }
  function sentenceGenerator() {
    var sentence = `<img src="${randomOne(one)}">`;
    document.querySelector(".one").innerHTML = sentence;
  }
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  sentenceGenerator();
  