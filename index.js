
const loginButton = document.querySelector("button");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const correctEmail = "user@example.com";
const correctPassword = "password123";

loginButton.addEventListener("click", function () {

    // Check if the email and password are correct
    if (emailInput.value === correctEmail && passwordInput.value === correctPassword) {
        // Display a welcome message in the console
        console.log(alert("welcome, " + emailInput.value));

    } 
    else {
        // Show an error message or handle incorrect input as needed
        console.log("Incorrect email or password. Please try again.");
        console.log(alert("Please enter the correct value"));
    }
});
