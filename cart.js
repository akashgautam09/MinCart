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

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function updateQuantity(productId, newQty) {
    if (newQty < 1) return removeFromCart(productId);
    let cart = getCart();
    const item = cart.find(t => t.id === productId)
    if (item) {
        item.qty = newQty;
        saveCart(cart);
        renderCart();
    }
}

function updateCartCountBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll(".cart-count").forEach(badge => {
        badge.textContent = totalItems > 0 ? totalItems : "";
        badge.style.border = totalItems > 0 ? "1px solid #477ea2" : "none";
    });
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
    const itemsprices = document.getElementById("items-price")

    if (!container) return; // not on cart page

    const cart = getCart();

    if (cart.length === 0) {
        container.style.display = "none";
        emptyMsg.style.display = "block";
        totalBox.style.display = "none";
        itemsprices.style.display = "none";
        return;
    }

    emptyMsg.style.display = "none";
    totalBox.style.display = "block";
    itemsprices.style.display = "block";

    container.innerHTML = cart.map(item => `
<div class="cart-item">

    <div class="img-details kmtl">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
            <h3 class="cart-item-title">${item.name}</h3>

            <span class="old-price"
                style="color: #878787;font-size:0.8rem;text-decoration: line-through;">₹${item.originalprice}</span>
            <span class="cart-item-price">&nbsp;₹${item.price.toFixed(2)}</span>
            <span style="color: #0e6706ff;font-size:0.8rem;">${Math.round(((item.originalprice - item.price) /
                item.originalprice) * 100)}% off</span>

        </div>
    </div>
    <div class="quantity-remove kmtl">

        <div class="cart-item-quantity">
            <button class="qty-btn" onclick="updateQty('${item.id}', ${item.qty - 1})">-</button>
            <input type="number" value="${item.qty}" min="1" readonly>
            <button class="qty-btn" onclick="updateQty('${item.id}', ${item.qty + 1})">+</button>
        </div>
        <button class="remove-btn" onclick="removeItem('${item.id}')">
            <img src="svgs/trash.svg" alt="Remove">
        </button>

    </div>
</div>
        `).join("");


    if (itemsprices) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const discount = cart.reduce((sum, item) => sum + (item.originalprice - item.price) * item.qty, 0);
        const taxRate = 0.08; // 8% tax (adjust as needed)
        const tax = subtotal * taxRate;
        const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50
        const total = subtotal + tax + shipping;

        itemsprices.innerHTML = `
        <div class="price-summary">
            <h3 class="price-summary-title">PRICE DETAILS</h3>
            
            <div class="price-breakdown">
                <div class="price-row">
                    <span>Subtotal</span>
                    <span>₹${subtotal.toFixed(2)}</span>
                </div>

                <div class="price-row">
                    <span>Discount</span>
                    <span style="color: #2e8b57;">-₹${discount.toFixed(2)}</span>
                </div>
                
                <div class="price-row">
                    <span>Tax (8%)</span>
                    <span>₹${tax.toFixed(2)}</span>
                </div>
                
                <div class="price-row">
                    <span>Shipping</span>
                    <span>${shipping === 0 ? '<em style="color:#016601;">FREE</em>' : '$' + shipping.toFixed(2)}</span>
                </div>
                
                <div class="price-row total-row">
                    <strong>Total Amount</strong>
                    <strong>₹${total.toFixed(2)}</strong>
                </div>
            </div>

            ${subtotal > 2000 ? '' : `
                <p class="free-shipping-note">
                    <em>Add <strong>₹${(2000 - subtotal).toFixed(2)}</strong> more for <strong>FREE shipping</strong>!</em>
                </p>
            `}
        </div>
    `;
        totalSpan.textContent = total.toFixed(2);
    }
}

window.updateQty = updateQuantity;
window.removeItem = removeFromCart;


function initAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            console.log("clicked")
            const productId = button.getAttribute("data-id");

            const allSources = [window.items, window.explore1, window.explore2, window.explore3, window.categories]
                .filter(Boolean) // ignore undefined
                .flat(); // merge all arrays

            const product = allSources.find(p => p.id === productId);
            if (!product) return;

            const cartItem = {
                id: product.id,
                name: product.item_name,
                price: product.current_price,
                originalprice: product.original_price,
                image: product.image
            };
            addToCart({ ...cartItem, button });
        })
    })
}

window.addEventListener("DOMContentLoaded", () => {
    updateCartCountBadge();
    initAddToCartButtons();
    renderCart();
});