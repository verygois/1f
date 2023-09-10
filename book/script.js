'use strict'

const directory = "https://ia800505.us.archive.org/20/items/1f_20230910/";

function thisIMG(id, arr) {
  arr.forEach((arrEach) => {
    const crearIMG = document.createElement("img");
    crearIMG.src = directory + arrEach;
    document.getElementById(id).appendChild(crearIMG)
  });
}