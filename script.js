let randomnumber1 = Math.floor(Math.random(6) * 6) + 1;

let randomimage1 = "dice" + randomnumber1;

let randomimageSource = "images/" + randomimage1 + ".png";

let picture1 = document.querySelectorAll("img")[0];

picture1.setAttribute("src", randomimageSource);

let randomnumber2 = Math.floor(Math.random(6) * 6) + 1;

let randomimage2 = "dice" + randomnumber2 + ".png";

let randomimagesource2 = "images/" + randomimage2;

let picture2 = document.querySelectorAll("img")[1];

picture2.setAttribute("src", randomimagesource2);


if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else if (randomnumber1 == randomnumber2) {
  document.querySelector("h1").innerHTML = "Match Draw";
}
