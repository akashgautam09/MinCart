console.log("let's write some javascript.")
const products = document.querySelector(".product-card")

function onloadproducts() {

    const productsContainer = document.querySelector('.product-grid');
    if (!productsContainer || !window.items) return;

    productsContainer.innerHTML = window.items.map(item => `
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
                        <span class="current-price">₹${item.current_price}</span>
                        ${item.is_discount ? `<span class="old-price" style="color: #878787;text-decoration: line-through;">₹${item.original_price}</span>` : ''}
                        ${item.is_discount ? `<span class="badge2">${Math.round(((item.original_price - item.current_price) / item.original_price) * 100)}% off</span>` : ''}
                        </div>
                    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');

}

function loadcategories() {
    const productcategories = document.querySelector('.category-grid');
    if (!productcategories || !window.categories) return;

    let html = '';
    categories.forEach(category => {
        html += `
            <div class="category-card">
                <img src="${category.image}" alt="${category.title}" class="category-img">
                <div class="category-overlay">
                    <h3 class="category-title">${category.title}</h3>
                    <p>${category.description}</p>
                    <a href="${category.link}" class="btn btn-primary1 category-btn">Explore</a>
                </div>
            </div>
        `;
    });

    productcategories.innerHTML = html;
}
// Load products when the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    onloadproducts();
    loadcategories();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuImg = menuToggle.querySelector('img');
menuToggle.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle('active');
    menuImg.src = isActive ? 'svgs/close.svg' : 'svgs/hamburger.svg';
})

document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    if (input.value) {
        alert('Thank you for subscribing!');
        input.value = '';
    }
});
