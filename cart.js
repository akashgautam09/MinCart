console.log("inside cart.js");
const CART_STORAGE_KEY = "mincart_cart";

function getCart() {
    let data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCountBadge();
}

function addToCart(product) {
    let cart = getCart();
    let existing = cart.find(p => p.id === product.id);
    if (existing) {
        existing.qty += 1;
    }
    else {
        cart.push({ ...product, qty: 1 })
    }
    saveCart(cart);
    showAddFeedback(product.button);
}

function updateQuantity(productId, newQty) {
    if(newQty<1) return removeFromCart(productId);
    let cart = getCart();
    const item = cart.find(t=> t.id === productId)
    if(item){
        item.qty=newQty;
        saveCart(cart);
        renderCart();
    }
}

function updateCartCountBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartcount = document.querySelector(".cart-count");
    cartcount.textContent = totalItems > 0 ? totalItems : "";
    cartcount.style.border = totalItems > 0 ? "1px solid #477ea2" : "none";
}

function showAddFeedback(button) {
    const original = button.textContent;
    button.textContent = "Added!";
    button.style.backgroundColor = "#016601";
    button.disabled = true;
    setTimeout(() => {
        button.textContent = original;
        button.style.backgroundColor = "";
        button.disabled = false;
    }, 1500);
}


function renderCart() {
    const container = document.getElementById("cartItems");
    const emptyMsg = document.getElementById("cartEmpty");
    const totalBox = document.getElementById("cartTotal");
    const totalSpan = document.getElementById("totalPrice");

    if (!container) return; // not on cart page

    const cart = getCart();

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


function initAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", () => {
            const productId = btn.getAttribute("data-id");
            const product = window.items.find(p => p.id === productId);
            const cartItem = {
                id: product.id,
                name: product.item_name,
                price: product.current_price,
                image: product.image
            };
            addToCart({ ...cartItem, button});
        })
    })
}