document.addEventListener("DOMContentLoaded", function () {
  // Function to handle validation and error messages
  function handleValidation() {
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

    return errors;
  }

  // Attach a submit event listener to the form
  document
    .querySelector(".container")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting

      const errors = handleValidation();

      if (Object.keys(errors).length > 0) {
        // Display error messages to the user
        for (const fieldName in errors) {
          const errorElement = document.querySelector(`#${fieldName}-error`);
          errorElement.textContent = errors[fieldName];
        }
        event.preventDefault(); // Prevent form submission
      } else {
        // Form is valid, submit it to the server
        document.getElementById("myForm").submit();
      }
    });

  // Attach a click event listener to the image (assumed to act as a submit button)
  document
    .getElementById("image-button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the image from acting as a link

      const errors = handleValidation();

      if (Object.keys(errors).length > 0) {
        // Display error messages to the user
        for (const fieldName in errors) {
          const errorElement = document.querySelector(`#${fieldName}-error`);
          errorElement.textContent = errors[fieldName];
        }
        event.preventDefault(); // Prevent form submission
      } else {
        // Form is valid, submit it to the server
        document.getElementById("myForm").submit();
      }
    });
});
