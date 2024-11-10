let items = document.getElementById('items');
let preloader = document.getElementById('loader');
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
    let res = JSON.parse(xhr.response);
    preloader.classList.remove('loader_active');
    showresult(res.response.Valute);
    }
});

function showresult(res){
    for(let i in res){
        x(i, res[i].Value);
    }
}

function x(a, b){
        items.insertAdjacentHTML('afterbegin', `
            <div class="item">
            <div class="item__code">
                ${a}
            </div>
            <div class="item__value">
                ${b}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            `);
    }

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();


