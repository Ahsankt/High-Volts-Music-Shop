// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Check URL to apply correct background class
    if (window.location.href.includes("acoustic-guitars.html")) {
        document.body.className = "acoustic";
    } else if (window.location.href.includes("electric-guitars.html")) {
        document.body.className = "electric";
    }
});

// Function to navigate and set background dynamically
function changeBackground(type) {
    if (type === "acoustic") {
        document.body.className = "acoustic";
        window.location.href = "acoustic-guitars.html";
    } else if (type === "electric") {
        document.body.className = "electric";
        window.location.href = "electric-guitars.html";
    }
}
