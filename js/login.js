document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    document.getElementById('username-error').style.visibility = 'hidden';
    document.getElementById('password-error').style.visibility = 'hidden';

    // Username validation
    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-error');
    if (username.value.trim() === '') {
        username.classList.add('error');
        usernameError.textContent = 'Username is required';
        usernameError.style.visibility = 'visible';
        isValid = false;
    } else {
        username.classList.remove('error');
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (password.value.trim() === '') {
        password.classList.add('error');
        passwordError.textContent = 'Password is required';
        passwordError.style.visibility = 'visible';
        isValid = false;
    } else {
        password.classList.remove('error');
    }
    if (isValid) {
        alert('Form is valid and ready to be submitted!');
    }
});
