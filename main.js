const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

let textSize = 16; //początkowa wielkość font-size dla p

function textIncrease() {
 // console.log("klik!");
 textSize++;
 text.style.fontSize = textSize + "px";
}

function textDecrease() {
    // console.log("klik!");
    textSize--;
    text.style.fontSize = textSize + "px";
   }

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)