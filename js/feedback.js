function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !rating || !message) {
        alert("Please fill in all fields!");
        return false;
    }

    // Example for form submission handling (can be adapted for server)
    alert("Feedback submitted successfully!");

    // Reset form after submission
    document.getElementById('feedbackForm').reset();

    return false; // Prevent page refresh (for demo purposes)
}
