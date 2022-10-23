window.onload = function () {
    staffBtn = document.getElementById('staffLogin')
    adminBtn = document.getElementById('adminLogin')
    slide = document.querySelector('.animation')

    staffBtn.addEventListener('click', function(){
        slide.setAttribute('class', 'animation staff')
    })

    adminBtn.addEventListener('click', function(){
        slide.setAttribute('class', 'animation admin')
    })
}