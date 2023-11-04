document
  .querySelector(".container")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    let day = document.querySelector("#days").value;
    let month = document.querySelector("#months").value;
    let year = document.querySelector("#years").value;

    // Clear existing error messages
    document.querySelectorAll(".error-message").forEach((errorElement) => {
      errorElement.textContent = "";
    });

    const errors = {};

    if (!day.trim()) {
      errors.day = "This field is required.";
      document.querySelector("#days-error").textContent =
        "This field is required.";
    }

    if (!month.trim()) {
      errors.month = "This field is required.";
      document.querySelector("#months-error").textContent =
        "This field is required.";
    }
    if (!year.trim()) {
      errors.year = "This field is required.";
      document.querySelector("#years-error").textContent =
        "This field is required.";
    }

    // Add more field validations as needed.

    if (Object.keys(errors).length > 0) {
      // Display error messages to the user
    } else {
      // Form is valid, submit it to the server.
      document.getElementById("myForm").submit();
    }
  });
