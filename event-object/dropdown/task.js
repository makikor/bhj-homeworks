let dropdown = document.body.querySelector(".dropdown__value");
let list = document.body.querySelector(".dropdown__list");
let links = document.body.querySelectorAll(".dropdown__item");

dropdown.addEventListener('click', function(){
    list.classList.toggle('dropdown__list_active');
    }
)

links.forEach((i) => {
    i.addEventListener("click", function(event){
        let value = i.textContent.trim();
        dropdown.textContent = value;
        event.preventDefault();
        list.classList.remove('dropdown__list_active');
    })
})