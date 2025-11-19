console.log('its on');

// Hero section carousel with infinite loop
const slidesWrapper = document.querySelector('.slides-wrapper');
const slideItems = document.querySelectorAll('.slide-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slideItems.length;

// Clone first and last slides for infinite loop
const firstSlide = slideItems[0].cloneNode(true);
const lastSlide = slideItems[totalSlides - 1].cloneNode(true);

// Add cloned slides
slidesWrapper.appendChild(firstSlide);
slidesWrapper.insertBefore(lastSlide, slideItems[0]);

// Update current index to account for the prepended clone
currentIndex = 1;

function updateSlidePosition() {
    const slideWidth = 100 / (totalSlides + 2); // +2 for the two clones
    slidesWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

function goToNext() {
    currentIndex++;
    updateSlidePosition();
    
    // If we're at the cloned first slide, jump to the real first slide
    if (currentIndex === totalSlides + 1) {
        setTimeout(() => {
            currentIndex = 1;
            slidesWrapper.style.transition = 'none';
            updateSlidePosition();
            setTimeout(() => {
                slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }, 500);
    }
}

function goToPrev() {
    currentIndex--;
    updateSlidePosition();
    
    // If we're at the cloned last slide, jump to the real last slide
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalSlides;
            slidesWrapper.style.transition = 'none';
            updateSlidePosition();
            setTimeout(() => {
                slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }, 500);
    }
}

nextBtn.addEventListener('click', goToNext);
prevBtn.addEventListener('click', goToPrev);

// Initialize position
updateSlidePosition();
