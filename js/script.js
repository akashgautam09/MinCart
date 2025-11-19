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

document.addEventListener("DOMContentLoaded", () => {

    function initProfilePopup() {
        const profileBtn = document.querySelector(".profile-btn");
        const popup = document.getElementById("profile-popup");
        const logoutBtn = document.getElementById("logoutBtn");

        if (!profileBtn || !popup) return;

        profileBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            const currentUser = localStorage.getItem("currentUser");

            if (!currentUser) {
                if (typeof showLogin === "function") showLogin();
                return;
            }

            const user = JSON.parse(currentUser);

            document.getElementById("popup-username").textContent = "Name: " + user.username;
            document.getElementById("popup-email").textContent = "Email: " + user.email;

            popup.style.display = popup.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", (e) => {
            if (!popup.contains(e.target) && !profileBtn.contains(e.target)) {
                popup.style.display = "none";
            }
        });

        // LOGOUT BUTTON CLICK
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("currentUser");

                if (typeof showMessage === "function") {
                    showMessage("Logged out successfully!");
                }

                popup.style.display = "none"; // Close popup

                setTimeout(() => {
                    const msgModal = document.getElementById("message-modal");
                    if (msgModal) msgModal.style.display = "none";
                }, 1500);
            });
        }
    }

    setTimeout(initProfilePopup, 200);
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
