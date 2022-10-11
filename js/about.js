const icon_close = document.querySelector('#icon-close')
const icon_open = document.querySelector('#icon-open')

shopHeader()
function shopHeader(){
    icon_open.addEventListener('click' , ()=>{
        document.querySelector('.header').classList.add('rotated')
    })
    icon_close.addEventListener('click' , ()=>{
        document.querySelector('.header').classList.remove('rotated')
        document.querySelector('.header').classList.add('unRotated')
    })
}