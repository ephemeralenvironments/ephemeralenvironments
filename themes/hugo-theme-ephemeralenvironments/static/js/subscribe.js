var userEmail = document.getElementById("email");
var submitButton = document.getElementById("submit-btn");

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var form = event.target;
    userEmail.style.display = "none";
    submitButton.style.display = "none";
    // Display submission status
    var submissionStatus = document.getElementById("submission-status");
    // Submit the form using Axios
    axios
      .post("/", new FormData(form))
      .then(function (response) {
        if (response.status === 200) {
          submissionStatus.textContent = "Thanks for subscribing!";
          form.reset(); // Clear the form fields
        } else {
          submissionStatus.textContent = "Please try again later";
        }
      })
      .catch(function (_) {
        submissionStatus.textContent =
          "An error occurred. Please try again later.";
      });
  });
