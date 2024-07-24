document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    
    // Create a new user object
    const newUser = {
        username: username,
        password: password,
        email: email
    };

    // Send the new user data to the backend (could be done via AJAX/fetch)
    addUser(newUser);

    // Redirect to login page
    window.location.href = './login.html';
});

function addUser(newUser) {
    // Read existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Add the new user to the array
    users.push(newUser);
    
    // Store updated user data back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
}
