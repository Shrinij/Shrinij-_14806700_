document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        document.getElementById('errorMessage').textContent = 'Please fill in both fields.';
    } else {
        alert('Login successful!');
        // You can add more logic here, like redirecting to a dashboard.
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = 'Passwords do not match!';
    } else {
        alert('Signup successful!');
        // You can add more logic here, like sending the data to a server.
    }
});
