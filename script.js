// script.js

function showProductPage(productType) {
    if (productType === 'Acoustic Guitars') {
        window.location.href = 'acoustic-guitars.html';
    } else if (productType === 'Electric Guitars') {
        window.location.href = 'electric-guitars.html';
    } else if (productType === 'Accessories') {
        window.location.href = 'accessories.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");
});
