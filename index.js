// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;

  // Get the user's level - UserLevel (string)
  let userLevel = document.querySelector("#level").value;
  
  // Get the user's hours of study UserHours (number)
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userLevel, userEmail, userHours});
});


// Validate the user's input
// Check if the user has selected a level - check a level has been entered, check against the allowed levels
// Check if the user has provided an email address - is this valid?, does it have an @, have they entered and email
// Check if the user has specified at least one hour of study - must be equal to or greater then 1,
// Check if the number of hours requested is within the allowed range -less then or equal to max hours for level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
