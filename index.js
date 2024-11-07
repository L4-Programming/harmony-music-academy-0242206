// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Form submitted");
});
// Get the user's email address- UserEmail (string)
// Get the user's level - UserLevel (string)
// Get the user's hours of study UserHours (number)
// Validate the user's input
// Check if the user has selected a level - check a level has been entered, check against the allowed levels
// Check if the user has provided an email address - is this valid?, does it have an @, have they entered and email
// Check if the user has specified at least one hour of study - must be equal to or greater then 1,
// Check if the number of hours requested is within the allowed range -less then or equal to max hours for level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
