let item = document.querySelector('.item');
let preloader = document.getElementById('loader')
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
    let answer = JSON.parse(xhr.responseText);
    console.log(answer)

    preloader.classList.remove('loader_active');
    }
    });


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')

xhr.send()

xhr.re