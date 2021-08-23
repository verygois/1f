const contents = [
    "/1f/05/001.png",
    "/1f/05/002.JPG",
    "/1f/05/003.JPG",
    "/1f/05/004.JPG"
  ];
  
  function randomContents(contentsArray) {
    var contents =
      contentsArray[Math.floor(Math.random() * contentsArray.length)];
    console.log(contents);
    return contents;
  }
  function sentenceGenerator() {
    var sentence = `<img src="${randomContents(contents)}">`;
    document.querySelector(".five").innerHTML = sentence;
  }
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  sentenceGenerator();
  