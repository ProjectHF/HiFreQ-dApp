// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  // Your form submission logic here
  // For example, you can validate form inputs and send data to a server

  // Get the selected tier and quantity
  const selectedTier = document.querySelector('input[name="tier"]:checked').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  // Calculate the actual amount
  let amount;
  if (selectedTier === 'white') {
    amount = 200 * quantity;
  } else if (selectedTier === 'yellow') {
    amount = 1600 * quantity;
  } else if (selectedTier === 'green') {
    amount = 6400 * quantity;
  } else {
    // Handle any other cases (optional)
    amount = 0;
  }

  // Update the "Selected Tier" and "Amount" sections in the form
  document.getElementById('selected-tier').textContent = selectedTier.toUpperCase();
  document.getElementById('selected-amount').textContent = `$${amount}`;
}

// Attach an event listener to the form submit button
const form = document.getElementById('contact-form'); // Assuming your form has an ID of "contact-form"
if (form) {
  form.addEventListener('submit', handleFormSubmit);
}

// Function to handle quantity increase and decrease
function decreaseQuantity() {
  let quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
    updateAmount(); // Call the function to update the amount
  }
}

function increaseQuantity() {
  let quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
  updateAmount(); // Call the function to update the amount
}

// Function to update the amount based on the selected tier and quantity
function updateAmount() {
  const selectedTier = document.querySelector('input[name="tier"]:checked').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  // Calculate the actual amount
  let amount;
  if (selectedTier === 'white') {
    amount = 200 * quantity;
  } else if (selectedTier === 'yellow') {
    amount = 1600 * quantity;
  } else if (selectedTier === 'green') {
    amount = 6400 * quantity;
  } else {
    // Handle any other cases (optional)
    amount = 0;
  }

  // Update the "Amount" section in the form
  document.getElementById('selected-amount').textContent = `$${amount}`;
  // Update the "Selected Tier" section in the form
  document.getElementById('selected-tier').textContent = selectedTier.toUpperCase();
}

// Add event listeners to tier radio inputs to update the amount and selected tier
const tierRadios = document.querySelectorAll('input[name="tier"]');
tierRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (document.getElementById('quantity').value === '1') {
      updateAmount();
    }
  });
});

// Call updateAmount() initially to set the initial amount and selected tier
updateAmount();
