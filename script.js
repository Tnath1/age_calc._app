document.addEventListener("DOMContentLoaded", function () {
  function calculateAge() {
    const day = parseInt(document.querySelector("#days").value);
    const month = parseInt(document.querySelector("#months").value);
    const year = parseInt(document.querySelector("#years").value);

    const birthDate = new Date(year, month - 1, day); // month is 0-based (0 = January)
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
      ageDays =
        ageDays +
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate() -
        birthDate.getDate();
    }

    return {
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    };
  }

  // Function to handle validation and error messages
  function handleValidation() {
    let day = document.querySelector("#days").value;
    let month = document.querySelector("#months").value;
    let year = document.querySelector("#years").value;
    const firstInput = document.querySelector("#days");
    const secondInput = document.querySelector("#months");
    const thirdInput = document.querySelector("#years");
    const redLabel = document.querySelector("#label");
    const redLabel02 = document.querySelector("#label2");
    const redLabel03 = document.querySelector("#label3");

    // Clear existing error messages
    document.querySelectorAll(".error-message").forEach((errorElement) => {
      errorElement.textContent = "";
    });

    const errors = {};

    if (!day.trim()) {
      errors.day = "This field is required.";
      document.querySelector("#days-error").textContent =
        "This field is required.";
      firstInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel.style.color = "hsl(0, 100%, 67%)";
    } else if (isNaN(day) || day < 1 || day > 31) {
      errors.day = "Please enter a valid day (1-31).";
      document.querySelector("#days-error").textContent =
        "Please enter a valid day.";
      firstInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel.style.color = "hsl(0, 100%, 67%)";
    } else {
      firstInput.style.border = "1px solid hsl(0, 1%, 44%)";
      redLabel.style.color = "hsl(0, 1%, 44%)";
    }

    if (!month.trim()) {
      errors.month = "This field is required.";
      document.querySelector("#months-error").textContent =
        "This field is required.";
      secondInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel02.style.color = "hsl(0, 100%, 67%)";
    } else if (isNaN(month) || month < 1 || month > 12) {
      errors.month = "Please enter a valid month (1-12).";
      document.querySelector("#months-error").textContent =
        "Please enter a valid month.";
      secondInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel02.style.color = "hsl(0, 100%, 67%)";
    } else {
      secondInput.style.border = "1px solid hsl(0, 1%, 44%)";
      redLabel02.style.color = "hsl(0, 1%, 44%)";
    }

    if (!year.trim()) {
      errors.year = "This field is required.";
      document.querySelector("#years-error").textContent =
        "This field is required.";
      thirdInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel03.style.color = "hsl(0, 100%, 67%)";
    } else if (isNaN(year) || year > new Date().getFullYear()) {
      errors.year = "Year must be in the past.";
      document.querySelector("#years-error").textContent =
        "Year must be in the past.";
      thirdInput.style.border = "1px solid hsl(0, 100%, 67%)";
      redLabel03.style.color = "hsl(0, 100%, 67%)";
    } else {
      thirdInput.style.border = "1px solid hsl(0, 1%, 44%)";
      redLabel03.style.color = "hsl(0, 1%, 44%)";
    }
    // ...

    // Calculate age if no errors and display it in span tags
    if (Object.keys(errors).length === 0) {
      // Calculate age as shown in the previous response
      // Display the calculated age in the respective span tags
      const age = calculateAge();
      // console.log(age);
      document.querySelector("#result-year").textContent = age.years + " years";
      document.querySelector("#result-month").textContent =
        age.months + " months";
      document.querySelector("#result-day").textContent = age.days + " days";
    }

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
        calculateAge(); // Call the calculateAge function
        document.getElementById("myForm").submit();
      }
    });
});
