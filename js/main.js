import { startAutoSlide, stopAutoSlide } from './autoplay.js';
import { setupControls } from './controls.js';
import { setupSwipe } from './swipe.js';
import { showImage, getCaption } from './utils.js';

const images = document.querySelectorAll("img");
const caption = document.getElementById("caption");
const carousel = document.getElementById("carousel");

let current = 0;

function nextImage() {
    current = (current + 1) % images.length;
    showImage(images, caption, current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(images, caption, current);
}

document.addEventListener("DOMContentLoaded", () => {
    // Show the first image
    showImage(images, caption, current);

    // Start the auto-slide
    startAutoSlide(nextImage);

    // Setup control buttons
    setupControls({
        prevBtn: document.getElementById("prevBtn"),
                  nextBtn: document.getElementById("nextBtn"),
                  stopBtn: document.getElementById("stopBtn"),
                  startBtn: document.getElementById("startBtn")
    }, {
        prevImage,
        nextImage,
        stopAutoSlide,
        startAutoSlide: () => startAutoSlide(nextImage)
    });

    // Enable swipe gestures
    setupSwipe(carousel, nextImage, prevImage);

    // Optional: hover pause/resume
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", () => startAutoSlide(nextImage));

    // Optional: tap-to-pause/resume (mobile)
    let lastTap = 0;
    carousel.addEventListener("touchend", (e) => {
        const now = new Date().getTime();
        if (now - lastTap < 300) {
            startAutoSlide(nextImage); // double tap to resume
        } else {
            stopAutoSlide(); // single tap to pause
        }
        lastTap = now;
    });
});
