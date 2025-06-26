export function setupSwipe(carousel, onSwipeLeft, onSwipeRight) {
  let startX = 0;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) onSwipeLeft();       // Swipe left
    else if (diff < -50) onSwipeRight(); // Swipe right
  });
}
