console.log("javascript running");

var totalTime = 30;
var timeRemaining = 0;
var gameOver = false;
var wiresToCut = [];

var wiresCut = {
	blue: false;
	green: false;
	red: false;
	white: false;
	yellow: false;
}





var cutWire = function () {
	this.src = "img/cut-" + this.id + "-wire.png";
};
//this will be the thing that is clicked on

var reset = function () {
	// document.getElementsByTagName("body").classList.remove = "exploded";
	// document.getElementsByTagName("body").classList.add = "unexploded";
	var wireImages = document.getElementsByClassName("imagebox")[0].children; // there maybe a lot od elemets in imagebox class
	for (var i = 0; i < wireImages.length; i++) {
		wireImages[i].src = "img/uncut-" + wireImages[i].id + "-wire.png";
	}

}
//can't use this, it is pointing to the reset button, but we don't want to do anything to the buttton, we want the wires
var initGame = function () {
	timeRemaining = totalTime;

};


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("blue").addEventListener("click", cutWire);
	document.getElementById("green").addEventListener("click", cutWire);
	document.getElementById("red").addEventListener("click", cutWire);
	document.getElementById("white").addEventListener("click", cutWire);
	document.getElementById("yellow").addEventListener("click", cutWire);
	document.getElementById("reset").addEventListener("click", reset);
});

