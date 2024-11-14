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
  let errors = {};

   // Helper function to add error messages
  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "Please enter your email address.");

  }
  if (userLevel === "") {
    addError("level", "Please select a level of study.");
  }
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "Please enter at least one hour of tuition.");
  }
  // if (isNaN(userHours) || userHours > 10) {
  //   addError("hoursPerWeek", "Please enter at less then 10 hours.");
  // }
  // Check if the userLevel exists in the maxHoursPerLevel object
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "Invalid level of study selected.");
  }
  // Check if the number of hours requested is within the allowed range
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }
   // Add error class to input elements with errors
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }
    // Return early if there are any errors
    if (Object.keys(errors).length > 0) {
      return;
    }
    console.log({ errors });
});


// Check if the user has selected a level - check a level has been entered, check against the allowed levels
// Check if the user has provided an email address - is this valid?, does it have an @, have they entered and email
// Check if the user has specified at least one hour of study - must be equal to or greater then 1,
// Check if the number of hours requested is within the allowed range -less then or equal to max hours for level
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user
