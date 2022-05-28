var color1 = document.querySelector(".colour1");
var color2 = document.querySelector(".colour2");
var currentCss = document.querySelector("h3");
var body = document.getElementById("cssGradient");


function changeColors() {
    body.style.background = "linear-gradient(to right " + ", " + color1.value + "," + color2.value + ")";
    currentCss.textContent = body.style.background;
}
color1.addEventListener("input", changeColors);
color2.addEventListener("input", changeColors);