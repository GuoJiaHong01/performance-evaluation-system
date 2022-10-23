window.onload = function () {
    const body = document.body
    const eye = document.querySelector('.eye')
    const beam = document.querySelector('.beam')
    const pswInput = document.getElementById('psw')

    body.addEventListener('mousemove', function(e){
        let rect = beam.getBoundingClientRect()
        let mouseX = rect.right + (rect.width/2)
        let mouseY = rect.top + (rect.height/2)
        let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY)
        let deg = (rad*(20/Math.PI)*-1)-350

        body.style.setProperty('--beam-deg',deg + 'deg')
    })

    eye.addEventListener('click', function(e){
        e.preventDefault()
        body.classList.toggle('show-password')

        if(eye.getAttribute('val') == '0') {
            pswInput.type = 'text'
            eye.setAttribute('val', '1')
            console.log(eye)
        }
        else {
            pswInput.type = 'password'
            eye.setAttribute('val', '0')
            console.log(eye)
        }
    })


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