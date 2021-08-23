const contents = [
    "/1f/01/001.jpg",
    "/1f/01/002.jpg",
    "/1f/01/003.jpg",
    "/1f/01/004.jpg"
  ];
  
  function randomContents(contentsArray) {
    var contents =
      contentsArray[Math.floor(Math.random() * contentsArray.length)];
    console.log(contents);
    return contents;
  }
  function sentenceGenerator() {
    var sentence = `<img src="${randomContents(contents)}">`;
    document.querySelector(".one").innerHTML = sentence;
  }
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  sentenceGenerator();
  