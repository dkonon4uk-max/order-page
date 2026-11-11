// console.log('okey');
// console.log(document.body);
const cart = document.querySelector('div.empty')
let counter = 0
const buyBtns = document.querySelectorAll('.top button')
// console.log(buyBtns);
const order = []
// ПОЯСНИТИ
buyBtns.forEach((btn, index) => {
    let item = 0
    btn.addEventListener('click', (event) => {
        // console.log('click');
        // console.log(event.target);
        // console.log(event.target.parentElement);
        // console.log(event.target.parentElement.parentElement);
        const currentCard = event.target.parentElement.parentElement
        // console.dir(currentCard.id)
        // console.dir(currentCard.children[1].children[1].textContent)
        // console.dir(currentCard.children[1].children[2].textContent)
        const nameProduct = currentCard.children[1].children[1].textContent
        const priceProduct = currentCard.children[1].children[2].textContent
        item++
        addToCart(nameProduct, priceProduct, index, item)


    })
})
function addToCart(name, price, id, q) {
    // console.log(name, price, id);
    order[id] = { name: name, price: price, id: id, q: q }
    console.log(order);
    cart.innerHTML = ''

    order.forEach((product) => {
        console.log(product.name, product.q, product.price, product.q * product.price);
        const itemOrder = `<div class="product-in-cart">
                                <h3>${product.name}</h3>
                                <p><span>${product.q}x</span>
                                <span>@ $${product.price}</span>
                                <span>$${product.q * product.price}</span>
                                </p>
                                <button type='button'>
                                <img src="./assets/images/icon-remove-item.svg" alt="">
                                </button>
                            </div>`
        cart.innerHTML = cart.innerHTML + itemOrder

    })
    const closeBtns = document.querySelectorAll('.product-in-cart button')
    console.log(closeBtns);
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', (event) => {

            console.log('click');
            console.log(event.currentTarget.closest('.product-in-cart'));
            event.currentTarget.closest('.product-in-cart').remove()
        })
    }
    )
}




// ПРОБЛЕМА У 18 РЯДКУ