let buttons = document.querySelectorAll('.product__add');
let products = document.querySelectorAll('.product');
let quantityProduct = document.querySelectorAll('.product__quantity-controls');
let basket = document.querySelector('.cart__products');
let arr = new Array();

// выбрать количество товара 
quantityProduct.forEach((i) => {
    result = Number(i.querySelector('.product__quantity-value').innerHTML.trim());
    i.firstElementChild.addEventListener('click', function(){
        if(result>=2){
            result-=1;
            i.querySelector('.product__quantity-value').innerHTML = result;
        }
    })
    i.lastElementChild.addEventListener('click', function(){
        result+=1;
        i.querySelector('.product__quantity-value').innerHTML = result;
    })
})

// добавление товара в корзину
buttons.forEach((i) => {
    i.addEventListener('click', (x)=>{
        let product = i.parentElement.parentElement.parentElement.getAttribute('data-id');
        let image = products[product-1].childNodes[3].getAttribute('src');
        let quantity = Number(i.previousElementSibling.children[1].innerHTML.trim());
        productInBusket(product, image, quantity)
    })
});

// Проверка наличия продукта 
function productInBusket(product, image, quantity){
    const result = arr.find((i)=> {return i==product})
    if(result) {
        summarizeProduct(product, quantity)     
      } else {
        addProduct(product, image, quantity);
      }
    arr.push(product);
}

// создание товара впервые в корзине
function addProduct(product, image, quantity){
    basket.insertAdjacentHTML('afterbegin', `
        <div class="cart__product" data-id="${product}">
        <img class="cart__product-image" src="${image}">
        <div class="cart__product-count">${quantity}</div>
        </div>
        `)
    deleteProduct()
}

// увеличение уже добавленного товара
function summarizeProduct(a, b){
    let i = Number(document.querySelector(`[data-id ='${a}']`).lastElementChild.innerText)+b;
    document.querySelector(`[data-id ='${a}']`).lastElementChild.innerHTML = i
}

// удаление товара из корзины
function deleteProduct(){
    document.querySelectorAll('.cart__product').forEach((del) => {
        del.addEventListener('click', () => {
            del.remove();
        })
    })
}