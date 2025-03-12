// script.js
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart!`);
    updateCart();
}

function updateCart() {
    console.log("Cart:", cart);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");
});
