<?php
// Include the database connection
include('db.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate form data (basic validation)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Prepare SQL statement to insert the data into the database
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);

        // Execute the statement
        if ($stmt->execute()) {
            // Redirect to a thank you page or display a success message
            echo "<script>alert('Мессеж амжилттай илгээгдлээ!'); window.location.href='contact.html';</script>";
        } else {
            echo "<script>alert('Алдаа гарлаа! Мессежийг дахин илгээхийг оролдоно уу.');</script>";
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "<script>alert('Бүх талбаруудыг бөглөх шаардлагатай.');</script>";
    }
}

// Close the connection
$conn->close();
?>
