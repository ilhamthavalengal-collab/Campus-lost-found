let title = "";
let description = "";
let locationText = "";
let dateText = "";
let timeText = "";
let imageData = "";


function nextScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function prevScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function hideAllScreens() {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
}

// Save title & description from Screen 2
function saveDetails() {
    title = document.getElementById("itemTitle").value;
    description = document.getElementById("itemDescription").value;

    // Show data in preview screen
    document.getElementById("previewTitle").innerText =
        title || "No title given";

    document.getElementById("previewDescription").innerText =
        description || "No description given";

    nextScreen(3);
}
function saveLocation() {
    locationText = document.getElementById("itemLocation").value;
    dateText = document.getElementById("itemDate").value;
    timeText = document.getElementById("itemTime").value;

    document.getElementById("previewLocation").innerText =
        locationText || "No location";

    document.getElementById("previewDate").innerText =
        dateText || "No date";

    document.getElementById("previewTime").innerText =
        timeText || "No time";

    nextScreen(4);
}


// Navigation functions
function nextScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function prevScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function hideAllScreens() {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
}

function postItem() {
    alert("Item posted successfully (frontend only)");
}
// Navigation functions

function nextScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function prevScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function hideAllScreens() {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
}
function postItem() {
    alert("Item posted successfully (frontend only)");
}
function nextScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function prevScreen(screenNumber) {
    hideAllScreens();
    document.getElementById("screen" + screenNumber).classList.add("active");
}

function hideAllScreens() {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
}
function postItem() {
    nextScreen(5); // Go to success screen
}
function goHome() {
    // Optional: clear inputs
    document.getElementById("itemTitle").value = "";
    document.getElementById("itemDescription").value = "";
    document.getElementById("itemLocation").value = "";
    document.getElementById("itemDate").value = "";
    document.getElementById("itemTime").value = "";

    nextScreen(1); // Go back to first screen
}
function previewPhoto() {
    const fileInput = document.getElementById("photoInput");
    const preview = document.getElementById("photoPreview");
    const finalPhoto = document.getElementById("finalPhoto");

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            imageData = reader.result;

            preview.src = imageData;
            preview.style.display = "block";

            finalPhoto.src = imageData;
        };

        reader.readAsDataURL(file);
    }
}

