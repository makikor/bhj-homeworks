let progress = document.getElementById('progress');
let form = document.forms[0];

form.addEventListener('submit', (i) => {
    i.preventDefault();
    let xhr = new XMLHttpRequest();        
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 0){
            progress.setAttribute('value', 0.2);
        } if(xhr.readyState == 1){
            progress.setAttribute('value', 0.4);
        } if(xhr.readyState == 2){
            progress.setAttribute('value', 0.6);
        } if(xhr.readyState == 3){
            progress.setAttribute('value', 0.8);
        } if(xhr.readyState == 4){
            progress.setAttribute('value', 1);
        }
    });

    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    let formData = new FormData(document.forms[0]);
    xhr.send(formData);
})

document.querySelector('.input__wrapper-button').addEventListener('click', ()=>{
    progress.setAttribute('value', 0.0);
})

