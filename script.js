document
  .querySelector(".container")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    let day = document.querySelector("#days").value;
    let month = document.querySelector("#months").value;
    let year = document.querySelector("#years").value;
    // Validate other fields as needed.

    const errors = {};

    if (!day.trim()) {
      errors.day = "This field is required.";
    }

    if (!month.trim()) {
      errors.month = "This field is required.";
    }
    if (!year.trim()) {
      errors.year = "This field is required.";
    }

    // Add more field validations as needed.

    if (Object.keys(errors).length > 0) {
      // Display error messages to the user
      // You can add code here to display error messages near the fields or in a summary section.
    } else {
      // Form is valid, submit it to the server.
      document.getElementById("myForm").submit();
    }
  });
