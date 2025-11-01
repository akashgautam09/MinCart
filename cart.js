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
}

function updateCartCountBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartcount = document.querySelector(".cart-count");
    cartcount.textContent = totalItems > 0 ? totalItems : "";
    cartcount.style.border = totalItems > 0 ? "1px solid #477ea2" : "none";
}

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
            addToCart(cartItem);
        })
    })
}