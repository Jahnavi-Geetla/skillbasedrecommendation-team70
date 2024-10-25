// login.js

// Login.js
import React from 'react';

function Login() {
    return <div>Login Component</div>;
}

export default Login; // Exported as default

// Simulated user data for authentication (you can replace this with actual database/auth logic)
const userData = {
    email: "user@example.com",
    password: "password123"
};

// Login function to check credentials and toggle views
function login() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // Check if entered credentials match the simulated user data
    if (emailInput === userData.email && passwordInput === userData.password) {
        // Hide login container and show course container
        document.getElementById("login-container").style.display = "none";
        document.getElementById("course-container").style.display = "block";
    } else {
        // Show an error message if credentials are incorrect
        alert("Invalid email or password. Please try again.");
    }
}

// Example function to handle skill selection and fetch recommendations (implementation to be completed)
function getRecommendations() {
    const selectedSkills = Array.from(document.getElementById("skills").selectedOptions).map(option => option.value);
    // Placeholder for recommendations fetching logic based on selected skills
    // Here you can make an API call or fetch data from the database based on skills
    document.getElementById("recommendations").innerHTML = `<p>Recommendations based on skills: ${selectedSkills.join(', ')}</p>`;
}
