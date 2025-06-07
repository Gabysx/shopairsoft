const menu = document.querySelector('#menu');
const cartBtn = document.querySelector('#cart-btn');
const cartModal = document.querySelector('#cart-modal');
const cartItemContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const cartCounter = document.querySelector('#cart-count');

const addressInput = document.querySelector('#address');
const addressWarn = document.querySelector('#address-warn');

cart = [];

//Abrir modal de carrinho
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});
//Fechar modal de carrinho
closeModalBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
cartModal.addEventListener('click', (event) => {
    
    if(event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});


//Adicionar o item ao modal 
menu.addEventListener('click', (event) => {
    let parentButton = event.target.closest('.add-to-cart-btn');
    if(parentButton){
        const name = parentButton.getAttribute('data-name');
        const price = parseFloat(parentButton.getAttribute('data-price'));
        addToCart(name, price)
    }


});

//Atualizar o carrinho
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += price;
    } else {
        cart.push({
            name, 
            price, 
            quantity: 1,
        });
    }

    updateCart();
}

function updateCart() {
    cartItemContainer = innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        cartItemContainer.appendChild(cartItem);
    });
}