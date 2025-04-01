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

function buyNow() {
    alert("Thank You for buying from High Volts Guitar Shop!");
}




let cartTotal = 0; // Store the total cart value
let cartItems = []; // Store the items added to the cart

function addToCart(itemName, price) {
    cartTotal += price; // Add the item's price to the total
    cartItems.push({ name: itemName, price: price }); // Add item to the cart list
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartContainer = document.getElementById("cart");
    let cartList = document.getElementById("cart-items");
    let cartTotalDisplay = document.getElementById("cart-total");

    // Clear previous list
    cartList.innerHTML = "";

    // Add items to the cart display
    cartItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });

    // Update total price
    cartTotalDisplay.textContent = `Total: $${cartTotal}`;

    // Make the cart visible when items are added
    cartContainer.style.display = "block";
}


