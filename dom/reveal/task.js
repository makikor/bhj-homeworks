let banners = Array.from(document.querySelectorAll('.reveal'));

banners.forEach(i => {
    document.addEventListener('scroll', function(){
        if(i.getBoundingClientRect().top < 500){
            i.classList.add('reveal_active')
            if(i.getBoundingClientRect().top < 350){
                i.classList.remove('reveal_active')
            }
        }
    })
})
