function onloadproducts() {

    const productsContainer = document.querySelector('.product-grid');
    if (!productsContainer || !window.explore2) return;

    productsContainer.innerHTML = window.explore2.map(item => `
            <div class="product-card" data-id="${item.id}">
                <div class="product-img">
                    <img src="${item.image}" alt="${item.item_name}">
                    ${item.is_new ? '<div class="product-badge badge1">New</div>' : ''}
                    <div class="product-actions">
                    <button class="action-btn" aria-label="Add to Wishlist"></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.item_name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${item.current_price}</span>
                        ${item.is_discount ? `<span class="old-price" style="color: #878787;text-decoration: line-through;">$${item.original_price}</span>` : ''}
                        ${item.is_discount ? `<span class="badge2">${Math.round(((item.original_price - item.current_price) / item.original_price) * 100)}% off</span>` : ''}
                        </div>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');

}
onloadproducts()