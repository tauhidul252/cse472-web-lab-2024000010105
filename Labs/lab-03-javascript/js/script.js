let availableSeats = 12;

function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

function checkSeats() {
    let message = document.getElementById("seatMessage");
    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}

function showGreeting() {
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetingMessage");
    if (name.trim() !== "") {
        output.textContent = "Welcome, " + name + "! Thank you for registering.";
    } else {
        output.textContent = "Please enter your full name above.";
    }
}

function showWorkshopDetails() {
    let detailsParagraph = document.getElementById("workshopDetails");
    detailsParagraph.textContent = "Venue: Lab 302, Building B | Time: 10:00 AM - 1:00 PM";
}