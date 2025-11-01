console.log("inside cart.js");
const CART_STORAGE_KEY = "mincart_cart";

function getCart(){
    let data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function renderCart() {
    const container = document.getElementById("cartItems");
    const emptyMsg = document.getElementById("cartEmpty");
    const totalBox = document.getElementById("cartTotal");
    const totalSpan = document.getElementById("totalPrice");

    if (!container) return; // not on cart page

    const cart = getCart();
    console.log(cart)

    if (cart.length === 0) {
        container.innerHTML = "";
        emptyMsg.style.display = "block";
        totalBox.style.display = "none";
        return;
    }

    emptyMsg.style.display = "none";
    totalBox.style.display = "block";

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="qty-btn" onclick="updateQty('${item.id}', ${item.qty - 1})">-</button>
                <input type="number" value="${item.qty}" min="1" readonly>
                <button class="qty-btn" onclick="updateQty('${item.id}', ${item.qty + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeItem('${item.id}')">
                <img src="svgs/trash.svg" alt="Remove">
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalSpan.textContent = total.toFixed(2);
}

window.updateQty = updateQuantity;
window.removeItem = removeFromCart;

