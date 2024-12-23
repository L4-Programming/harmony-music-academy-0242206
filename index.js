import { calculateCosts } from "./CalculateCost.js";
import { displayResults } from "./displayResult.js";
import { validateForm } from "./validateForm.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // Store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  // Store the user's hours of study as userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  // Validate the user's input
  const result = validateForm({ userEmail, userLevel, userHours });

  if (result) {
    // Calculate the total cost
    const output = calculateCosts(result);



    // Display the total cost to the user
    displayResults(output);
  }
});
