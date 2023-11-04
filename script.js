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
    } else if (isNaN(day) || day < 1 || day > 31) {
      errors.day = "Please enter a valid day (1-31).";
      document.querySelector("#days-error").textContent =
        "Please enter a valid day.";
    }

    if (!month.trim()) {
      errors.month = "This field is required.";
      document.querySelector("#months-error").textContent =
        "This field is required.";
    } else if (isNaN(month) || month < 1 || month > 12) {
      errors.month = "Please enter a valid month (1-12).";
      document.querySelector("#months-error").textContent =
        "Please enter a valid month.";
    }

    if (!year.trim()) {
      errors.year = "This field is required.";
      document.querySelector("#years-error").textContent =
        "This field is required.";
    } else if (isNaN(year) || year > new Date().getFullYear()) {
      errors.year = "Year must be in the past.";
      document.querySelector("#years-error").textContent =
        "Year must be in the past.";
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
