console.log("let's write some javascript.")
const products = document.querySelector(".product-card")

function onloadproducts() {
    const productsContainer = document.querySelector('.product-grid');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    items.forEach(item => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${item.image}" alt="${item.item_name}">
                    ${item.is_new ? '<div class="product-badge badge1">New</div>' : ''}
                    ${item.is_discount ? `<div class="product-badge badge2">-${Math.round(((item.original_price-item.current_price)/item.original_price)*100)}%</div>` : ''}
                    <div class="product-actions">
                        <button class="action-btn" aria-label="Add to Wishlist"></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.item_name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${item.current_price}</span>
                        ${item.discount_percentage > 0 ? `<span class="old-price">$${item.original_price}</span>` : ''}
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Load products when the DOM is ready
window.addEventListener('DOMContentLoaded', onloadproducts);