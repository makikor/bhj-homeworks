let pollTitle = document.querySelector('.poll__title');
let pollAnswers = document.querySelector('.poll__answers');
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
    let res = JSON.parse(xhr.response);
    pollTitleAndAnswers(res);
    }

});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

function pollTitleAndAnswers(res){
    pollTitle.insertAdjacentHTML('afterbegin', `
        <div>
            ${res.data.title}
        </div>
    `);    
    answers(res);
}

function answers(res){
    res.data.answers.forEach((i) => {
        pollAnswers.insertAdjacentHTML('afterbegin', `
            <button class="poll__answer">
                ${i}
            </button>
        `)  
    });
    document.querySelectorAll('.poll__answer').forEach((i)=>{
        i.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });
    });
}