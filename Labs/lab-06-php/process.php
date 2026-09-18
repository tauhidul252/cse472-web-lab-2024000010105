<?php
function sanitize($value) {
    return htmlspecialchars(trim((string)$value), ENT_QUOTES, 'UTF-8');
}

$studentName = '';
$studentId = '';
$studentEmail = '';
$department = '';
$workshop = '';
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentName = isset($_POST['studentName']) ? $_POST['studentName'] : '';
    $studentId = isset($_POST['studentId']) ? $_POST['studentId'] : '';
    $studentEmail = isset($_POST['studentEmail']) ? $_POST['studentEmail'] : '';
    $department = isset($_POST['department']) ? $_POST['department'] : '';
    $workshop = isset($_POST['workshop']) ? $_POST['workshop'] : '';

    if (empty($studentName)) {
        $errors[] = 'Full name is required.';
    }

    if (empty($studentId)) {
        $errors[] = 'Student ID is required.';
    }

    if (empty($studentEmail) || !filter_var($studentEmail, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'A valid email address is required.';
    }

    if (empty($workshop)) {
        $errors[] = 'Please select a workshop.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Result</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Registration Status</h1>
            <p>Department of Computer Science and Engineering | Southeast University</p>
        </div>
    </header>

    <main class="container">
        <section class="card">
            <?php if ($_SERVER['REQUEST_METHOD'] !== 'POST') : ?>
                <h2>Access Error</h2>
                <p class="message error">This page must be accessed through the registration form.</p>
                <a href="index.html" class="link-button">Back to Form</a>
            <?php elseif (!empty($errors)) : ?>
                <h2>Validation Failed</h2>
                <ul class="error-list">
                    <?php foreach ($errors as $error) : ?>
                        <li><?php echo sanitize($error); ?></li>
                    <?php endforeach; ?>
                </ul>
                <a href="index.html" class="link-button">Try Again</a>
            <?php else : ?>
                <h2>Registration Successful</h2>
                <div class="result-box">
                    <p><strong>Full Name:</strong> <?php echo sanitize($studentName); ?></p>
                    <p><strong>Student ID:</strong> <?php echo sanitize($studentId); ?></p>
                    <p><strong>Email:</strong> <?php echo sanitize($studentEmail); ?></p>
                    <p><strong>Department:</strong> <?php echo sanitize($department); ?></p>
                    <p><strong>Workshop:</strong> <?php echo sanitize($workshop); ?></p>
                </div>
                <p class="message success">Your registration has been successfully submitted.</p>
                <a href="index.html" class="link-button">Register Another Student</a>
            <?php endif; ?>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>CSE472 Web and Internet Programming Lab | Lab 06</p>
        </div>
    </footer>
</body>
</html>
