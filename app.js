const Enddate = "2025-03-24T22:00:00"; // Updated to ISO 8601 format

document.getElementById("end-date").innerText = Enddate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(Enddate);
    const now = new Date();
    const diff = end - now;

    // Check if the countdown has reached zero
    if (diff < 0) {
        inputs[0].value = 0; // days
        inputs[1].value = 0; // hours
        inputs[2].value = 0; // minutes
        inputs[3].value = 0; // seconds
        return; // Exit the function
    }

    // convert into days, hours, minutes, seconds
    inputs[0].value = Math.floor(diff / 3600 / 24); // days
    inputs[1].value = Math.floor(diff / 3600) % 24; // hours
    inputs[2].value = Math.floor(diff / 60) % 60; // minutes
    inputs[3].value = Math.floor(diff) % 60; // seconds
}

// Call clock function every second
setInterval(clock, 1000);

clock();
