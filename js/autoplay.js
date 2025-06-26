let interval;

export function startAutoSlide(callback, delay = 4000) {
  stopAutoSlide(); // clear if already running
  interval = setInterval(callback, delay);
}

export function stopAutoSlide() {
  clearInterval(interval);
}
