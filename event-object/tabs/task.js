let nav = document.querySelector('.tab__navigation');
let tabs = document.getElementsByClassName('tab');
let content = document.getElementsByClassName('tab__content');

nav.addEventListener('click', event => {
    Array.from(tabs).forEach((i) => i.classList.remove('tab_active'));
    let index = Array.from(tabs).indexOf(event.target);
    tabs[index].classList.add('tab_active');
    Array.from(content).forEach((i) => {
        i.classList.remove('tab__content_active');
        content[index].classList.add('tab__content_active');
    });
})