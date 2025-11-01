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
                    ${item.is_discount ? `<div class="product-badge badge2">-${Math.round(((item.original_price - item.current_price) / item.original_price) * 100)}%</div>` : ''}
                    <div class="product-actions">
                        <button class="action-btn" aria-label="Add to Wishlist"></button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${item.item_name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${item.current_price}</span>
                        ${item.is_discount ? `<span class="old-price">$${item.original_price}</span>` : ''}
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
    });
    
    const addtocart = document.querySelectorAll(".add-to-cart");
    const cartcount = document.querySelector(".cart-count");

    let itemcount = parseInt(localStorage.getItem("cartCount")) || 0;
cartcount.textContent = itemcount;
if(itemcount>0){
    cartcount.style.border='1px solid #477ea2'
}
else{
    cartcount.textContent='';
}

addtocart.forEach(btn => {
    btn.addEventListener("click", () => {
        itemcount++;
                cartcount.textContent=itemcount;
                btn.textContent='Added!'
                btn.style.background='#016601'
                localStorage.setItem("cartcount",itemcount);
                if(itemcount>0){
                    cartcount.style.border='1px solid #477ea2'
                }
                setTimeout(() => {
                    btn.textContent='Add to Cart'
                    btn.style.background=''
                }, 1500);
            });
        });
}

function loadcategories() {
    const productcategories = document.querySelector('.category-grid');
    if (!productcategories) return;

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
