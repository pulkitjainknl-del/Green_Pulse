const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const slidesToShow = 4;
const totalSlides = slides.length;

// Move slider correctly
function updateSlider() {
  const slideWidth = slides[0].offsetWidth; 
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Next
nextBtn.addEventListener('click', () => {
  if (index < totalSlides - slidesToShow) {
    index++;
    updateSlider();
  }
});

// Previous
prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

// Fix on resize
window.addEventListener('resize', updateSlider);