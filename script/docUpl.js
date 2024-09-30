// File upload button functionality
const fileUploadButtons = document.querySelectorAll(".file-upload");
const fileInputs = document.querySelectorAll("input[type='file']");

fileUploadButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    fileInputs[index].click();
  });
});

// File upload confirmation (replace with your actual upload logic)
const uploadButtons = document.querySelectorAll(".upload-btn");

uploadButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const fileInput = fileInputs[index];
    const fileName = fileInput.files[0].name;
    alert("Uploading " + fileName + "..."); 
    // Here, you would handle the actual file upload using AJAX or other methods
  });
});

// Submit button functionality
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", () => {
  // You can add validation and other actions before submitting
  alert("Submitting form..."); 
  // Here, you would send the form data to the server for processing
});
