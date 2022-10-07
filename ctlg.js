const random = [
    "/1f/01/001.jpg",
    "/1f/02/01.jpg",
    "/1f/03/img/000.jpg",
    "/1f/04/img/000.jpeg",
    "/1f/05/img/000.png"
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