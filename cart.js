console.log("inside cart.js");
const CART_STORAGE_KEY = "mincart_cart";

function getCart(){
    let data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveCart(cart){
localStorage.setItem(CART_STORAGE_KEY,JSON.stringify(cart));
updateCartCountBadge();
}


function initAddToCartButtons(){
    document.querySelectorAll(".add-to-cart").forEach((btn)=>{
        btn.addEventListener("click",()=>{
            productId = btn.getAttribute("data-id");
            product = window.items.find(p=>p.id === productId);
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