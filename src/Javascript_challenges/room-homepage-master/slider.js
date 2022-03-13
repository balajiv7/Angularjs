var indexSlide = 0;
showSlide();


function showSlide(){
    var i;
    var slides = document.getElementsByClassName('slider__list');
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    indexSlide++;
    if(indexSlide > slides.length){
        indexSlide = 1;
    }
    slides[indexSlide - 1].style.display = "flex";    
}

function avanzaSlide(n){
     var indexSlide = 1;
    showSlide (indexSlide += n);
}