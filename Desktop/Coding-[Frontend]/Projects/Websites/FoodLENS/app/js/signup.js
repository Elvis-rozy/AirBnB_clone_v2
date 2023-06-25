/*=========================================
Password section Hide/View
=========================================*/
let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = ()  => {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "Images/logo/eye-open.png";
    } else {
        password.type = "password";
        eyeicon.src = "Images/logo/eye-close.png";
    }
}
/*=========================================
Submit-Form Validation and Submission
=========================================*/
const username = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('clicked');

    if (username.value == null || username.value === "") {
        e.preventDefault();
        alert("Username is required");
        return false;
    } else if (username.value.length < 6) {
        e.preventDefault();
        alert("Username must be 6 characters or more");
        return false;
    } else if (email.value == null || email.value === "") {
        e.preventDefault();
        alert("Email address cannot be blank");
        return false;
    } else if (password.value == null || password.value === "") {
        e.preventDefault();
        alert("Password cannot be blank");
        return false;
    } else if (password.value.length <= 7) {
        e.preventDefault();
        alert("Password must be at least 8 characters long.");
        return false;
    } else if (password.value.length >= 20) {
        e.preventDefault();
        alert("Password must be less than 20 characters.");
        return false;
    } else if (password.value === 'password') {
        e.preventDefault();
        alert("Password cannot be password.");
        return false;
    } else {
        // Prevent form submission
        e.preventDefault();
        // Collect form data
        var formData = new FormData(this);
        // Make a POST request using fetch API
        fetch("https://localhost:3000/api/v1/auth/register", {
            method: "POST",
            body: formData
        }).then(function(response) {
            if (response.ok) {
                // Successful response handling
                alert("Form data successfully submitted!");
                console.log("Form data successfully submitted!");
            } else {
                // Error response handling
                console.log("Error submitting form data.");
                console.error(error);
            }
        })
        .catch(function(error) {
            // Network or fetch API error handling
            console.log("An error occurred whilst fetching signup POST - data:", error);
        });
    }
})