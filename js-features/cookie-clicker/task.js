let click = 0;
let hashClicks = [];
let counter = document.getElementById('clicker__counter')
let imgClick = document.querySelector('img');

imgClick.addEventListener('click', function(){
    click++;

    let realClick = new Date();
    hashClicks.push(realClick.getTime());
    let avgTimeClickInSecond = 1/((hashClicks[click-1] - hashClicks[click-2])/1000);
    let result = Math.floor( avgTimeClickInSecond * 100 ) / 100

    counter.innerHTML = `${click} <br> Скорость клика: ${result}`
    click%2 == 0 ? imgClick.style.width = "200px" : imgClick.style.width = "250px";

})

