let slideIndex = 0;

const allDots = document.querySelectorAll('.dot');
const nextArrow = document.querySelector('.next');
const prevArrow = document.querySelector('.prev');

// Arrow Buttons for changing slides
const nextSlide = ()=> {
    if (slideIndex == 3) {
        slideIndex = 0;
    } else {
        slideIndex = slideIndex + 1;
    }
    showSlides();
}
nextArrow.addEventListener('click', nextSlide )

const previousSlide = () => {
    if (slideIndex == 0) {
        slideIndex = 3;
    } else {
        slideIndex = slideIndex - 1;
    }
    showSlides();
}
prevArrow.addEventListener('click', previousSlide )

// Dot buttons for chaning slides and changing active dot when slide changes
const dotEventListener = (event) => {
    slideIndex = parseInt(event.target.getAttribute('dotIndex'));
    showSlides()
}

const changeActiveDot = () => {
    for (let i=0; i<allDots.length; i++) {
        if (slideIndex == allDots[i].getAttribute('dotIndex')) {
            allDots[i].classList.add('active');
        } else {
            allDots[i].classList.remove('active');
        }
    }
}
allDots.forEach((dot) => dot.addEventListener('click', dotEventListener ))

let timer;

// Show current slide
function showSlides () {
    let mySlides = document.querySelectorAll('.mySlides');
    for (let i=0; i<mySlides.length; i++) {
        let currentSlide = mySlides[i]
        let currentSlideIndex = parseInt(mySlides[i].getAttribute('index'));
        if (currentSlideIndex == slideIndex) {
            currentSlide.style.display = 'inline-block';
        } else {
            currentSlide.style.display = 'none';
        }
    }
    changeActiveDot()
    clearTimeout(timer);
    timer = setTimeout("nextSlide()",5000)
}

showSlides();