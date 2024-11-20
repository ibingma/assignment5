"use strict";
/*
   Assignment 5 - Scripts to create countdown timer used in 
	the birthday_countdown.html file.

   Countdown Clock
   Author: Ibing Maharlika
   Date: 10/18/2024   

*/

/* Execute the function to run and display the countdown clock */
window.onload = countdown;
setInterval("countdown()", 1000); // run the function every second

// Change countdown-to date here. Watch out for the format of input.
const targetDate = new Date(2026, 4, 1); // Year, Month, Day - (months are 0-indexed)

/* Function to create and run the countdown clock */
function countdown() {
	/* Store the current date and titme */
	var currentDay= new Date();	
   
   // Check if the target date is in the past (earlier than the current date)
   if (currentDay > targetDate) {
      // If it is, update targetDate to the same day and month
		//but in the next year
      targetDate.setFullYear(currentDay.getFullYear() + 1);
    }
	
	// Convert days left to countdown into computer clock.
	var daysLeft = (targetDate-currentDay)/(1000*60*60*24);

	/* Calculate the hours left in the current day */
	var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
	var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
	var secsLeft = (minsLeft - Math.floor(minsLeft)) *60;

	/* Display the time left until countdown date */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent= Math.floor(secsLeft);

	/* Select the countdown container */
	const countdownContainer = document.getElementById("count1");
	
	/* Apply color styles based on the number of days left */
	if (daysLeft <= 30) {
		// Less than or equal to 30 days
		countdownContainer.style.color = "red";		
	} else if (daysLeft <= 180) {
		// Less than or equal to 6 months (about 180 days)
		countdownContainer.style.color = "green";		
	} else {
		// More than 6 months: default styling
		countdownContainer.style.color = "blue";		
	}
}

