var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

// Function for setting gradient to the background:

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background;
}

// ***

// Function for generating random color:

function getRandomColor() {
	var hex = '0123456789abcdef';
	var color = '#';
	while (color.length < 7) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
}

// ***

// Function for setting random color to the background:

function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

// ***

// shows a popup window with a message:

var count = 0;
random.onclick = function() {
	count++;
	if (count === 5) {
		alert("I am tired of surprising you.");
		count = 0;
	}
}

// ***

document.addEventListener(document.onload, setRandomColor());

random.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);