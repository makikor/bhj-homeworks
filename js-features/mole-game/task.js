const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const sumHole = document.querySelectorAll("div.hole");

let countKill = 0;
let countFault = 0;

for (let i = 0; i < sumHole.length; i++){
    sumHole[i].addEventListener('click', function() {
        if(sumHole[i].classList.contains('hole_has-mole')){
            countKill++;
            dead.innerHTML = `${countKill}`
        }else{
            countFault++;
            lost.innerHTML = `${countFault}`
        }
        resultWinner();
        dead.innerHTML = `${countKill}`;
        lost.innerHTML = `${countFault}`;
    })
}

function resultWinner(){
    if(countKill==10){
        alert('Вы выйграли!');
        countKill = 0;
        countFault = 0;
    }
    if(countFault==5){
        alert('Вы проиграли!');
        countKill = 0;
        countFault = 0;
    }
}

