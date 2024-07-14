document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorDiv = document.getElementById('error');

    if (username === 'admin' && password === '1234') {
        errorDiv.textContent = 'Login successful!';
        errorDiv.classList.remove('text-red-500');
        errorDiv.classList.add('text-green-500');

        window.location.href = "page.html";
    } else {
        errorDiv.textContent = 'Invalid username or password';
        errorDiv.classList.add('text-red-500');
    }
});
