let randomnumber = Math.floor(Math.random(6)+1);
let randomimage = "dice"+randomnumber+".png";
let randomImageSource = "images/"+randomimage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)
alert("working")