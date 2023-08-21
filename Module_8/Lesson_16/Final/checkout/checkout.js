import { createMarkup } from "../templates/templateCheckout";

const selectors = {
    container: document.querySelector('.js-list'),
    totalPrice: document.querySelector('.js-total-price'),
    clear: document.querySelector('.js-clear')
}

const PRODUCT_LS_KEY = 'checkout';
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
let totalCost;

if(products.length){
    selectors.clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc += qty * price, 0);
}

selectors.totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : 'Your basket is empty';
selectors.container.insertAdjacentHTML('beforeend', createMarkup(products))
selectors.clear.addEventListener('click', handlerClearBasket)



function handlerClearBasket(){
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = '../index.html';
}
