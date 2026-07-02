// Shopping Cart Calculator
let prices = [20000, 3000, 1500];
const quantityInputs = document.querySelectorAll("input[type='number']");
const totalCells = document.querySelectorAll("tbody tr td:last-child");
const grandTotal = document.querySelector(".summary p");
const checkoutBtn = document.querySelector("button");
// Calculate cart total
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < quantityInputs.length; i++) {
        let qty = parseInt(quantityInputs[i].value);
        // Validation
        if (isNaN(qty) || qty < 1) {
            qty = 1;
            quantityInputs[i].value = 1;
        }
        if (qty > 100) {
            alert("Maximum quantity allowed is 100.");
            qty = 100;
            quantityInputs[i].value = 100;
        }

        let itemTotal = prices[i] * qty;
        totalCells[i].textContent = "₹" + itemTotal;

        total += itemTotal;
    }
    grandTotal.textContent = "₹" + total;
}

// Event Listeners using loop
for (let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("input", calculateTotal);
}
// Checkout Validation
checkoutBtn.addEventListener("click", function () {
    let items = 0;

    for (let i = 0; i < quantityInputs.length; i++) {
        items += parseInt(quantityInputs[i].value);
    }

    if (items === 0) {
        alert("Your shopping cart is empty.");
        return;
    }

    let confirmOrder = confirm(
        "Proceed to checkout?\n\nTotal Items: " +
        items +
        "\nTotal Amount: " +
        grandTotal.textContent
    );
    if (confirmOrder) {
        alert("✅ Order placed successfully!");
    } else {
        alert("Checkout cancelled.");
    }
});
// Initial Calculation
calculateTotal();
