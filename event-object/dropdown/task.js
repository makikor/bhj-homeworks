let clickI = document.body.querySelector(".dropdown__value");
let list = document.body.querySelector(".dropdown__list");

clickI.addEventListener('click', function(){
    list.classList.toggle('dropdown__list_active');
})
