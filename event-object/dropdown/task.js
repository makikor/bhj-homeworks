let Dropdown = document.body.querySelector(".dropdown__value");
let list = document.body.querySelector(".dropdown__list");
let links = document.body.querySelectorAll(".dropdown__item");

Dropdown.addEventListener('click', function(){
    list.classList.toggle('dropdown__list_active');
    Array.from(links).forEach((i) => {
        i.addEventListener("click", function(){
            let value = i.textContent.trim();
            Dropdown.textContent = value;
        })
    })
    }
)


