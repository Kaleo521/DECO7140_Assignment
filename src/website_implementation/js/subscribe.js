// Define a function to handle changes in input fields
const handleInputChange = () => {
    // Get the DOM elements for the input fields and the submit button
    let firstName = document.getElementById('firstName');
    let suburb = document.getElementById('suburb');
    let email = document.getElementById('email');
    let button = document.getElementById('subscribe-submit-button');

    // Check if all fields have values and the email is valid
    if (firstName.value && suburb.value && email.value && email.validity.valid) {
        // Add the 'enabled' class to the button and enable it
        button.classList.add('enabled');
        button.disabled = false;
    } else {
        // Remove the 'enabled' class from the button and disable it
        button.classList.remove('enabled');
        button.disabled = true;
    }
};

// Define a function to handle form submission
const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
};

// Get the values from the input fields
let firstName = document.getElementById('firstName').value;
let suburb = document.getElementById('suburb').value;
let email = document.getElementById('email').value;

// Get the DOM element to display response messages
let responseMessage = document.getElementById('responseMessage');

// Set an initial message for the user
responseMessage.textContent = 'Sending your request ... Please wait.';

// Create a payload for the API request using the values from the input fields
let payload = {
    subscriber_name: firstName,
    subscriber_suburb: suburb,
    subscriber_email: email
};

// Define the API endpoint and request details
const url = 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/api/';
const method = 'POST';
const headers = {
    'Content-Type': 'application/json',
};

// Send a POST request to the API endpoint with the payload
fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(payload)
})
.then((response) => response.text())
.then((data) => {
    // Handle different responses from the API
    if (data === 'added') {
        responseMessage.textContent = 'Subscription successful. Thank you for subscribing!';
    } else if (data === "exists") {
        responseMessage.textContent = 'This email address has already been used to subscribe.';
    } else if (data === 'error') {
        responseMessage.textContent = 'An error occurred with the API. Please try again later.';
    }
})
.catch((error) => {
    // Log any errors to the console and inform the user
    console.error('Error:', error);
    responseMessage.textContent = 'An unexpected error occurred. Please try again later.';
});

// Add event listeners for input changes and form submission
subscribeForm.addEventListener('input', handleInputChange);
subscribeForm.addEventListener('submit', handleSubmit);
