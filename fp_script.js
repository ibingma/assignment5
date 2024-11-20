"use strict";
/*
	This is the scripts file for the homepage. Display the local time and
	changing the background color at intervals.
	
	Author: Ibing Maharlika
   Date: 11/18/24		
*/

window.onload = init;
// Initial function to be loaded when the homepage is called.
function init() {
	changeBackgroundColor();
   setInterval(changeBackgroundColor, 5000);
	addLocalTime();
	runClock;
	setInterval("runClock()", 1000);
}

/* Array of colors to cycle through. Variables defined outside the function
	so that they do not have to be redefined everytime the function is called
	at interval. Color index can increment evertime function run.
*/
const colors = ["#E5EAE6", "#AFB6B1", "#7F6334", "#603721", "#383F27"];
let colorIndex = 0; 

// Function to change the background color
function changeBackgroundColor() {
	// Target the just the body section. This only affect those areas
	// where the body section is not covered by any background color of
	// other elements.
   document.body.style.backgroundColor = colors[colorIndex];
   colorIndex = (colorIndex + 1) % colors.length; // Cycle back to the start
	// Target the HTML background. 
	document.documentElement.style.backgroundColor = colors[colorIndex];
   colorIndex = (colorIndex + 1) % colors.length;
	
	// Target the background color of the main body section
	const image = document.querySelector("#about-section ");
    if (image) {
        image.style.backgroundColor = colors[colorIndex];
		  colorIndex = (colorIndex + 1) % colors.length;
    }
}

function addLocalTime() {    
	// Insert local time via div element in the HTML
    const localTimeDiv = document.getElementById("localTime");
    
	 // Create the h3 heading
    const timeHeading = document.createElement("h3");
    timeHeading.id = "timeHeading";
    timeHeading.textContent = "Local time: ";
    
    // Create the div for the date and time
    const dateNow = document.createElement("div");
    dateNow.id = "dateNow";
    dateNow.innerHTML = "11/3/2017<br />2:45:12 p.m."; // Placeholder date and time

    // Append the h3 and date div to the main container div
    localTimeDiv.appendChild(timeHeading);
    localTimeDiv.appendChild(dateNow);    
}

/* Function to create and run the countdown clock */
function runClock() {
	/* Store the current date and titme */
	var currentDay= new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr	= currentDay.toLocaleTimeString();

	/* Display the current date and time */
	document.getElementById("dateNow").innerHTML =
	dateStr + "<br />" + timeStr;
}


