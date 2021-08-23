const five = [
    "/1f/05/001.png",
    "/1f/05/002.JPG",
    "/1f/05/003.JPG",
    "/1f/05/004.JPG"
  ];
  
  function randomFive(fiveArray) {
    var five =
    fiveArray[Math.floor(Math.random() * fiveArray.length)];
    console.log(five);
    return five;
  }
  function sentenceGenerator() {
    var sentence = `<img src="${randomFive(five)}">`;
    document.querySelector(".five").innerHTML = sentence;
  }
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  sentenceGenerator();
  