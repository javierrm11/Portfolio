let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.carousel-slide img').length;
    if (index >= totalSlides) {
        currentIndex = 0; // Reinicia al primer slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Va al último slide
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentIndex + n);
}
