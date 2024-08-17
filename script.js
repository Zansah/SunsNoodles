function toggleMenu() {
    var slidingMenu = document.getElementById("slidingMenu");
    var overlay = document.getElementById("overlay");
    if (slidingMenu.style.left === "-350px") {
        slidingMenu.style.left = "0";
        overlay.style.display = "block";
    } else {
        slidingMenu.style.left = "-350px";
        overlay.style.display = "none";
    }
}

let currentIndex = 0;
const photos = document.querySelectorAll('.main-page .photo');
let intervalId;

function showNextPhoto() {
    
    photos[currentIndex].classList.remove('active');

   
    currentIndex = (currentIndex + 1) % photos.length;

    
    photos[currentIndex].classList.add('active');
}


function startSlideshow() {
    intervalId = setInterval(showNextPhoto, 5000);
}


function stopSlideshow() {
    clearInterval(intervalId);
}


photos[currentIndex].classList.add('active');


startSlideshow();

window.addEventListener('scroll', stopSlideshow);
window.addEventListener('resize', stopSlideshow);
window.addEventListener('keydown', stopSlideshow);
window.addEventListener('mousemove', stopSlideshow);



document.addEventListener("DOMContentLoaded", function() {
    const words = document.querySelectorAll('.sub-text-header span');
    let delay = 0;

    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('active');
        }, delay);
        delay += 500; 
    });
});


const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cardContainer = document.querySelector('.card-container');

let scrollPosition = 0;

rightArrow.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 16; 
    scrollPosition -= cardWidth;
    cardContainer.style.transform = `translateX(${scrollPosition}px)`;
});

leftArrow.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 16; 
    scrollPosition += cardWidth;
    cardContainer.style.transform = `translateX(${scrollPosition}px)`;
});







