// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };
  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;

  // Get the user's level - UserLevel (string)
  let userLevel = document.querySelector("#level").value;
  
  // Get the user's hours of study UserHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

   // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    alert("Please enter your email address.");

    return;
  }
  if (userLevel === "") {
    alert("Please enter your Level.");

    return;
  }
  if (isNaN(userHours) || userHours < 1) {
    alert("Please enter at least one hour of tuition.");

    return;
  }
  if (isNaN(userHours) || userHours > 10) {
    alert("Please enter less then 10 hours.");

    return;
  }
  // Check if the userLevel exists in the maxHoursPerLevel object
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    alert("Invalid level of study selected.");

    return;
  }
  // Check if the number of hours requested is within the allowed range
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    alert(`You can only study a maximum of ${maxAllowedHours} hours per week.`);
  }

  console.log({ userLevel, userEmail, userHours});
});


// Check if the user has selected a level - check a level has been entered, check against the allowed levels
// Check if the user has provided an email address - is this valid?, does it have an @, have they entered and email
// Check if the user has specified at least one hour of study - must be equal to or greater then 1,
// Check if the number of hours requested is within the allowed range -less then or equal to max hours for level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
