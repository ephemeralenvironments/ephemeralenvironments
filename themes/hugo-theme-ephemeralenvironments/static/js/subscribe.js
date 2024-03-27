var userEmail = document.getElementById("email");
var submitButton = document.getElementById("submit-btn");
var submissionStatus = document.getElementById("submission-status");
var grecaptcha = document.getElementById("recaptcha");

document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let response = grecaptcha.getResponse();
   
    if (!response) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    var form = event.target;
    userEmail.style.display = "none";
    submitButton.style.display = "none";

    axios
      .post("/", new FormData(form))
      .then(function (response) {
        if (response.status === 200) {
          submissionStatus.textContent = "Thanks for subscribing!";
          grecaptcha.style.display = "none";
          form.reset();
        } else {
          submissionStatus.textContent = "Please try again later";
        }
      })
      .catch(function (error) {
        submissionStatus.textContent =
          "An error occurred. Please try again later.";
      });
  });
