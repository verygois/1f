'use strict'

const directory = "https://ia800505.us.archive.org/20/items/1f_20230910/";

function thisIMG(id, arr) {
  let ii = 0;
  document.getElementById(id).style.backgroundImage = `url('${directory}${arr[ii]}'`;
}