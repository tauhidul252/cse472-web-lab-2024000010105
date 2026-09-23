// Lab 05: Fetch and Simple API Use

// Function to load workshop data from local JSON file
async function loadWorkshop() {
    document.getElementById("loadMessage").textContent = "Please wait. Loading workshop information...";

    try {
        const response = await fetch("data/workshop.json");

        if (response.status === 200) {
            const workshop = await response.json();

            document.getElementById("workshopTitle").textContent = workshop.title;
            document.getElementById("workshopDate").textContent = workshop.date;
            document.getElementById("workshopVenue").textContent = workshop.venue;
            document.getElementById("workshopSeats").textContent = workshop.seats;
            document.getElementById("workshopInstructor").textContent = workshop.instructor;
            document.getElementById("workshopDuration").textContent = workshop.duration;

            document.getElementById("loadMessage").textContent = "Workshop data loaded successfully.";
        } else {
            document.getElementById("loadMessage").textContent = "Could not load workshop data.";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("loadMessage").textContent = "Could not load workshop data.";
    }
}

// Function to load public user data from JSONPlaceholder API
async function loadSampleUser() {
    document.getElementById("apiUser").textContent = "Loading sample user...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");

        if (response.status === 200) {
            const user = await response.json();
            document.getElementById("apiUser").textContent = user.name + " - " + user.email;
        } else {
            document.getElementById("apiUser").textContent = "Could not load API data.";
        }
    } catch (error) {
        console.error("API Fetch error:", error);
        document.getElementById("apiUser").textContent = "Could not load API data.";
    }
}

// Lab 04: Form handling and localStorage logic
function submitRegistration() {
    let name = document.getElementById("studentName").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }
    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }
    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }
    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };

    let jsonData = JSON.stringify(registration, null, 2);
    localStorage.setItem("registration", jsonData);
    document.getElementById("jsonOutput").textContent = jsonData;
    message.textContent = "Registration saved successfully.";
}

function showSavedRegistration() {
    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);
    document.getElementById("jsonOutput").textContent = savedData;
    output.textContent = registration.name + " registered for " + registration.workshop + ".";
}

function clearRegistration() {
    localStorage.removeItem("registration");
    document.getElementById("jsonOutput").textContent = "No registration saved yet.";
    document.getElementById("savedMessage").textContent = "Saved registration cleared.";
}

// Restore saved registration from localStorage on initial page load if present
let savedRegistration = localStorage.getItem("registration");
if (savedRegistration !== null) {
    document.getElementById("jsonOutput").textContent = savedRegistration;
}
