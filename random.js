const random = [
  "http://vg.pe.hu/1f/01/001.jpg",
  "http://vg.pe.hu/1f/02/01.jpg",
  "http://vg.pe.hu/1f/03/001.jpg",
  "http://vg.pe.hu/1f/04/05.jpg",
  "http://vg.pe.hu/1f/05/001.png"
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
  }, 2000);
  sentenceGenerator();
  
