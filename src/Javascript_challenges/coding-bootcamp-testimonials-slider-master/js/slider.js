const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");
const firstSlide = document.getElementById("slide1");
const secondSlide = document.getElementById("slide2");
secondSlide.style.opacity = "0";

arrowLeft.addEventListener('click', () =>{
    firstSlide.style.opacity = "1";
    secondSlide.style.opacity = "0";
})
arrowRight.addEventListener('click', () =>{
    secondSlide.style.opacity = "1";
    firstSlide.style.opacity = "0";
})