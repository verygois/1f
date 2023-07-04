function randomImg(randomArray) {
  let random = randomArray[Math.floor(Math.random() * randomArray.length)];
  return random;
}

function BGImg() {
  const bgimage = document.getElementById("random");
  bgimage.style.backgroundImage = "url(" + randomImg(random) + ")";
}

window.setInterval(function () {
  BGImg();
}, 2022);
BGImg();
