var hamburger = document.getElementsByClassName("hamburger");
var xSign = document.getElementsByClassName("orangeBox");

hamburger[0].onclick = function() {
	var visibilityValue = window.getComputedStyle(hamburger[0],null).getPropertyValue("visibility");
	if (visibilityValue !== "hidden") {
		hamburger[0].style.visibility = "hidden";
		xSign[0].style.visibility = "visible";
	}


}

xSign[0].onclick = function() {
	var visibilityVal = window.getComputedStyle(xSign[0],null).getPropertyValue("visibility");

	if (visibilityVal !== "hidden") {
		xSign[0].style.visibility = "hidden";
		hamburger[0].style.visibility = "visible";
	}
}
