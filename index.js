// image slider   

let flag = 0;

function controller(x){
    flag = flag + x
    slideshow(flag)
}
slideshow(flag)
function slideshow(n){
    let slides = document.getElementsByClassName('slide')
    // console.log(Array.isArray(slides))
    for(let y of slides){
        y.style.display = "none"
    }
    if(n == slides.length){
        flag = 0
        n = 0
    }
    if(n < 0){
        flag = slides.length - 1 
        n = slides.length -1
    }
    slides[n].style.display = "block"
}



