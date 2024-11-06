//buttons size text
let buttonsSizeText = document.querySelectorAll('.font-size');
let books = document.querySelector('.book');
// buttons text color
let parentControlColor = document.querySelector('.book__control_color')
let childColorText = parentControlColor.querySelectorAll('.color')
//buttons background color
let parentControlBackground = document.querySelector('.book__control_background')
let childControlBackground = parentControlBackground.querySelectorAll('.color')



buttonsSizeText.forEach(function(i){
    i.addEventListener('click', () => {
        event.preventDefault();
        resetSizeText(i);
        let elem = i.dataset.size;
        books.classList.add(`book_fs-${elem}`)
    })
}
)

function resetSizeText(i){
    books.classList.remove('book_fs-small');
    books.classList.remove('book_fs-big');
    buttonsSizeText.forEach((i)=>i.classList.remove('font-size_active'));
    i.classList.add('font-size_active');
}

childColorText.forEach(function(i){
    i.addEventListener('click', () => {
        event.preventDefault();
        resetColorText(i);
        let elem = i.dataset.textColor;
        books.classList.add(`book_color-${elem}`) 
    })
}
)

function resetColorText(i){
    books.classList.remove('book_color-gray');
    books.classList.remove('book_color-whitesmoke');
    childColorText.forEach((i)=>i.classList.remove('color_active'));
    i.classList.add('color_active');
}

childControlBackground.forEach((i) => {
    i.addEventListener('click', function(){
        event.preventDefault();
        resetBackground(i);
        let elem = i.dataset.bgColor;
        books.classList.add(`bg_color_${elem}`) 
    })
}
)

function resetBackground(i){
    books.classList.remove('bg_color_gray');
    books.classList.remove('bg_color_white');
    books.classList.remove('bg_color_black');
    childControlBackground.forEach((i) => i.classList.remove('color_active'));
    i.classList.add('color_active');
}