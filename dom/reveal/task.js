let banners = Array.from(document.querySelectorAll('.reveal'));

banners.forEach(i => {
    document.addEventListener('scroll', function(){
        if(i.getBoundingClientRect().top < 800){
            i.classList.add('reveal_active')
            if(i.getBoundingClientRect().top < 0){
                i.classList.remove('reveal_active')
            }
        }
    })
})
