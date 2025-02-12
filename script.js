document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextImage, 5000);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // Event Listeners
    nextButton.addEventListener("click", function () {
        nextImage();
        resetAutoSlide();
    });

    prevButton.addEventListener("click", function () {
        prevImage();
        resetAutoSlide();
    });

    // Swipe Events for Mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector(".carousel").addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector(".carousel").addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < touchStartX) nextImage();  // Swipe Left
        if (touchEndX > touchStartX) prevImage();  // Swipe Right
        resetAutoSlide();
    });

    // Initialize
    showImage(currentIndex);
    startAutoSlide();
});
