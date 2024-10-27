let rotators = Array.from(document.querySelectorAll('.rotator__case'))
let i = 0;

function time(){
    console.log(i)
    rotators[i].classList.remove('rotator__case_active');
    rotators[i+1].classList.add('rotator__case_active');
    rotators[i+1].style.color = rotators[i+1].dataset.color
    i++
}
function resetTime(){
    i = 0;
    rotators[i].classList.add('rotator__case_active')
    rotators[i].style.color = rotators[i].dataset.color
}

setInterval(time, 1000)
setInterval(resetTime, 6000)

