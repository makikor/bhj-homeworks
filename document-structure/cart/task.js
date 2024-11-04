let buttons = document.querySelectorAll('.product__add');
let products = document.querySelectorAll('.product');
let quantityProduct = document.querySelectorAll('.product__quantity-controls');
let basket = document.querySelector('.cart__products');



// добавление товара в корзину
buttons.forEach((i) => {
    i.addEventListener('click', (b)=>{
        let product = i.parentElement.parentElement.parentElement.getAttribute('data-id');
        let image = products[product-1].childNodes[3].getAttribute('src');
        let quantity = i.previousElementSibling.children[1].innerHTML.trim();
        
        addProduct(product, image, quantity);      
    })
});


// управление количеством товара 
quantityProduct.forEach((i) => {
    let result = i.querySelector('.product__quantity-value').nodeType;
    i.firstElementChild.addEventListener('click', function(){
        result-=1;
        i.querySelector('.product__quantity-value').innerHTML = result;
    })
    i.lastElementChild.addEventListener('click', function(){
        result+=1;
        i.querySelector('.product__quantity-value').innerHTML = result;
    })
})

//создать продукт в корзине 
function addProduct(product, image, quantity){
    let item = document.createElement('div');
    item.classList.add('cart__product');
    item.setAttribute('data-id', product);
    item.addEventListener('click', ()=>{         //удаление товара из корзины
        item.remove();
    });

    let img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.setAttribute('src', image);

    let number = document.createElement('div');
    number.classList.add('cart__product-count');
    number.innerHTML = quantity;

    item.append(img, number)
    basket.append(item)
}


