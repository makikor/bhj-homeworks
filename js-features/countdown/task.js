let time = 59;
let number = document.getElementById('timer');
number.innerHTML = `${'00'}:${'00'}:${time}`
let timerId = setInterval(timer, 1000);

function timer(){  
    let second = time--;
    second = time < 10 ? "0" + time : time;
    number.innerHTML = `${'00'}:${'00'}:${second}`
    if(time == 0){
        clearInterval(timerId);
        alert('Вы победили');
    }
}