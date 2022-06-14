// generate two random numbers from 1 to 6.
// set src attribute using random number by string concatenation to display img1 - img6
// hopefully whole file executes on load.

let randomNum1 = Math.random() * 6;
let randomNum2 = Math.random() * 6;

// add 1 and floor to obtain random integers from 1 to 6:

randomNum1 = Math.floor(randomNum1 + 1);
randomNum2 = Math.floor(randomNum2 + 1);

// create random strings that will set the source of images:

let randomString1 = "images/dice" + randomNum1 + ".png";
let randomString2 = "images/dice" + randomNum2 + ".png";

// set the random dice faces

document.querySelector("img.img1").setAttribute("src", randomString1);
document.querySelector("img.img2").setAttribute("src", randomString2);

// change h1 according to who won:

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "Draw!";
}