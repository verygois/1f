const random = [
  "http://vg.pe.hu/1f/01/001.jpg",
  "http://vg.pe.hu/1f/02/01.jpg",
  "http://vg.pe.hu/1f/03/000.jpg",
  "http://vg.pe.hu/1f/04/000.jpeg",
  "http://vg.pe.hu/1f/05/000.png"
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
  
