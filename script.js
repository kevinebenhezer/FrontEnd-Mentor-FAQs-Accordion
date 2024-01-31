// First SVG
var firstParagraph = document.querySelector(".first");
var firstMinusSVG = document.querySelector(".first-minus-svg");
var firstSVG = document.querySelector(".first-svg");
firstSVG.addEventListener("click", svgOne);
firstMinusSVG.addEventListener("click", svgDelOne);

function svgOne() {
	if (firstParagraph.hasAttribute("hidden")) {
		firstParagraph.removeAttribute("hidden");
		firstSVG.setAttribute("display", "none");
		firstMinusSVG.setAttribute("display", "flex");
	} else {
		firstParagraph.setAttribute("hidden", "0");
	}
}
function svgDelOne() {
	firstParagraph.setAttribute("hidden", "0");
	firstSVG.removeAttribute("display");
	firstMinusSVG.setAttribute("display", "none");
}

// Second SVG
var secondParagraph = document.querySelector(".second");
var secondMinusSVG = document.querySelector(".second-minus-svg");
var secondSVG = document.querySelector(".second-svg");
secondSVG.addEventListener("click", svgTwo);
secondMinusSVG.addEventListener("click", svgDelTwo);

function svgTwo() {
	if (secondParagraph.hasAttribute("hidden")) {
		secondParagraph.removeAttribute("hidden");
		secondSVG.setAttribute("display", "none");
		secondMinusSVG.setAttribute("display", "flex");
	} else {
		secondParagraph.setAttribute("hidden", "0");
	}
}

function svgDelTwo() {
	secondParagraph.setAttribute("hidden", "0");
	secondSVG.removeAttribute("display");
	secondMinusSVG.setAttribute("display", "none");
}

// Third SVG
var thirdMinusSVG = document.querySelector(".third-minus-svg");
var thirdSVG = document.querySelector(".third-svg");
var thirdParagraph = document.querySelector(".third");
thirdSVG.addEventListener("click", svgThree);
thirdMinusSVG.addEventListener("click", svgDelThree);

function svgThree() {
	if (thirdParagraph.hasAttribute("hidden")) {
		thirdParagraph.removeAttribute("hidden");
		thirdSVG.setAttribute("display", "none");
		thirdMinusSVG.setAttribute("display", "flex");
	} else {
		thirdParagraph.setAttribute("hidden", "0");
	}
}
function svgDelThree() {
	thirdParagraph.setAttribute("hidden", "0");
	thirdSVG.removeAttribute("display");
	thirdMinusSVG.setAttribute("display", "none");
}

// Fourth SVG
var fourthMinusSVG = document.querySelector(".fourth-minus-svg");
var fourthSVG = document.querySelector(".fourth-svg");
var fourthParagraph = document.querySelector(".fourth");
fourthSVG.addEventListener("click", svgFour);
fourthMinusSVG.addEventListener("click", svgDelFour);

function svgFour() {
	if (fourthParagraph.hasAttribute("hidden")) {
		fourthParagraph.removeAttribute("hidden");
		fourthSVG.setAttribute("display", "none");
		fourthMinusSVG.setAttribute("display", "flex");
	} else {
		fourthParagraph.setAttribute("hidden", "0");
	}
}
function svgDelFour() {
	fourthParagraph.setAttribute("hidden", "0");
	fourthSVG.removeAttribute("display");
	fourthMinusSVG.setAttribute("display", "none");
}
