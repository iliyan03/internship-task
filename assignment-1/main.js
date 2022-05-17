/* Slideshow */
var slideIndex = 1;
let timer;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function startTimer(){
  timer = setInterval(plusSlides, 5000, 1)
}

function showSlides(n) {
    var i;
    let quotes_container = document.getElementById('quotes');
    var quotes = document.getElementsByClassName("quote");
    let quote_owners = document.getElementsByClassName("carousel-member-name");
    var dots = document.getElementsByClassName("dot");
    if (n > quotes.length){
        slideIndex = 1
    } else if (n < 1){
        slideIndex = quotes.length
    }
    for (i = 0; i < dots.length; i++) { 
        dots[i].className = dots[i].className.replace(" active", "");
        quote_owners[i].className = quote_owners[i].className.replace(" active", "");
    }
    if(slideIndex == 1){ /* Show quote 1 */
        quotes_container.style.transform = "translate(100%, 0)"
    } else if(slideIndex == 2){ /* Show quote 2 */
        quotes_container.style.transform = "translate(0, 0)"
    } else if(slideIndex == 3){ /* Show quote 3 */
        quotes_container.style.transform = "translate(-100%, 0)"
    }
    dots[slideIndex-1].className += " active";
    quote_owners[slideIndex-1].className += " active";
    if (timer){
        clearInterval(timer);
    }
    startTimer()
}