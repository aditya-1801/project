<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize user input
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // You can also add server-side validation here (e.g., check if email exists in DB)
    
    // Simulating a successful registration process
    // In a real application, you would save data to a database here
    
    // For now, we will just simulate the success message response
    echo "Registration Successful! Data has been saved.";
}
?>
