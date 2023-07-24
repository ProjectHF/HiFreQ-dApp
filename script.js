// Example JavaScript code for HiFreQ website

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  // Your form submission logic here
  // For example, you can validate form inputs and send data to a server
}

// Attach an event listener to the form submit button
const form = document.getElementById('contact-form'); // Assuming your form has an ID of "contact-form"
if (form) {
  form.addEventListener('submit', handleFormSubmit);
}
