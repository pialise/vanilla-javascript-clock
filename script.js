const secondTicker = document.querySelector(".secondticker");
const minuteTicker = document.querySelector(".minuteticker");
const hourTicker = document.querySelector(".hourticker");

function setDate() {
	const now = new Date();			// creates date-object	

	const seconds = now.getSeconds(); // returns seconds (0-59)
	const secDegrees = (seconds/60)*360;
	if (seconds === 0) {
	secondTicker.style.transform = "rotate(264deg)";
	secondTicker.style.transitionDuration = "0.2s";		
	secondTicker.style.transform = "rotate(270deg)";
	secondTicker.style.transitionDuration = "0s";	
	} else {
	secondTicker.style.transform = "rotate(" + (secDegrees - 90) + "deg)";
	}
	
	const minutes = now.getMinutes();
	const minDegrees = (minutes/60)*360;
	if (minutes === 0) {
	minuteTicker.style.transform = "rotate(264deg)";
	minuteTicker.style.transitionDuration = "0.2s";		
	minuteTicker.style.transform = "rotate(270deg)";
	minuteTicker.style.transitionDuration = "0s";
	} else {
	minuteTicker.style.transform = "rotate(" + (minDegrees - 90) + "deg)";
	}
		
	const hours = now.getHours();
	const hDegrees = (hours/12)*360;
	if (hours === 0) {
	hourTicker.style.transform = "rotate(264deg)";
	hourTicker.style.transitionDuration = "0.2s";		
	hourTicker.style.transform = "rotate(270deg)";
	hourTicker.style.transitionDuration = "0s";
	} else {
	hourTicker.style.transform = "rotate(" + (hDegrees - 90) + "deg)";		
	}
	}

setInterval(setDate, 1000);		// calls a function at one second intervals
setDate();