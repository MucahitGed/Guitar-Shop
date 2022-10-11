const icon_close = document.querySelector('#icon-close')
const icon_open = document.querySelector('#icon-open')
const AllProduct = document.querySelectorAll('.product')
const product_contents = document.querySelectorAll('.product-content')
const products = document.querySelector('.products')
const music_btn = document.querySelectorAll('.music-btn')

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



productEnter()
function productEnter(){
product_contents.forEach(product =>{       
    product.addEventListener('mouseover' , ()=>{
        product.style.opacity= "1";
            }   
        
    )
    product.addEventListener('mouseleave' , ()=>{
        product.style.opacity= "0"
                }
            )
        }
    )
}
    
musicPlayer()

function musicPlayer(){
    let audio = document.createElement('audio')
    audio.src = './js/1.mp3'

    music_btn.forEach(mscBtn =>{
        mscBtn.addEventListener('click', ()=>{
            if(mscBtn.classList.contains('start')){
                audio.play()
                console.log('start')
            }else if(mscBtn.classList.contains('stop')){
                console.log('stop')
                audio.pause()
            }
        })
        
    })
    
}
