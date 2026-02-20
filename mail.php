<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "info@qrtyard.co.za";  // Your email
    $subject = "New Contact Form Message";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "<script>alert('Message sent successfully!');window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message.');window.location.href='index.html';</script>";
    }
}
?>
