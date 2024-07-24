document.addEventListener('DOMContentLoaded', function() {
    // Farmer login form submission
    document.getElementById('farmerLoginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('farmerUsername').value;
        const password = document.getElementById('farmerPassword').value;
        
        // Call function to authenticate farmer
        authenticateFarmer(username, password);
    });

    // Government login form submission
    document.getElementById('govtLoginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('govtUsername').value;
        const password = document.getElementById('govtPassword').value;        
        // Call function to authenticate government
        authenticateGovernment(username, password);
    });
});


function authenticateFarmer(username, password) {
    // Implement authentication logic for farmer login
    console.log('Authenticating farmer:', username, password);
    // You can add your authentication logic here
    window.location.href = "./JS/farmer.html";

}


var errorMsg = document.getElementById('error-message');

function authenticateGovernment(username, password) {
    const fixedUsername = 'Govt';
    const fixedPassword = 'govt@2023';
    
    // Check if entered username and password match the fixed values
    if (username === fixedUsername && password === fixedPassword) {
        console.log('Government login successful');
        window.location.href = "./JS/govt.html";
        // Redirect to government dashboard or perform other actions
    } else {
        errorMsg.textContent = "Invalid!";
        // Display error message or perform other actions
    }
}
