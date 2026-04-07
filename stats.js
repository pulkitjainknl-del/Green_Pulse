document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector('.plastic-slider');
    const cards = document.querySelectorAll('.plastic-card');
    const leftBtn = document.querySelector('.plastic-arrow.left');
    const rightBtn = document.querySelector('.plastic-arrow.right');

    let index = 2; // center card (3rd card active)

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 40; // width + gap

        // Move slider so center card stays in middle
        slider.style.transform = `translateX(-${(index - 1) * cardWidth}px)`;

        // Update active card
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    // Right arrow
    rightBtn.addEventListener("click", function () {
        if (index < cards.length - 2) {
            index++;
            updateSlider();
        }
    });

    // Left arrow
    leftBtn.addEventListener("click", function () {
        if (index > 1) {
            index--;
            updateSlider();
        }
    });

    // Initial position
    updateSlider();

});