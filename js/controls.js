export function setupControls({ prevBtn, nextBtn, stopBtn, startBtn }, {
  prevImage,
  nextImage,
  stopAutoSlide,
  startAutoSlide
}) {
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);
  stopBtn.addEventListener("click", stopAutoSlide);
  startBtn.addEventListener("click", startAutoSlide);
}
