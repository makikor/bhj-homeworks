let tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((i) => {
    let div = document.createElement('div');
    div.classList.add('tooltip');
    div.innerHTML = i.title;
    div.style=`left: ${i.offsetLeft}px`;
    i.after(div);

i.addEventListener('click', (elem) => {
    elem.preventDefault();
    div.classList.toggle('tooltip_active');    
    })
})