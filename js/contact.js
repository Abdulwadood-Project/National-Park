document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("form-message").innerHTML = "<p style='color: red;'>All fields are required!</p>";
        return;
    }

    document.getElementById("form-message").innerHTML = "<p style='color: green;'>Your message has been sent!</p>";

    // Optionally, send the form data to the server here using an AJAX request
});
