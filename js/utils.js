export function showImage(images, captionEl, index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  captionEl.textContent = images[index].dataset.caption;
}
export function getCaption(filename) {
    const name = filename
    .split('/')
    .pop()
    .split('.')
    .slice(0, -1)
    .join('.');
    return name.replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}
