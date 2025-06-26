<?php
$images = array_merge(
    glob("images/*.jpg"),
    glob("images/*.jpeg"),
    glob("images/*.png"),
    glob("images/*.webp")
);
function getCaption($filename) {
    return ucwords(str_replace(['-', '_'], ' ', pathinfo($filename, PATHINFO_FILENAME)));
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Image Carousel</title>
  <style>
    body { font-family: sans-serif; background: #f0f0f0; text-align: center; }
    .carousel-container {
      max-width: 800px;
      margin: 50px auto;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      touch-action: pan-y;
    }
    .carousel-slide {
      position: relative;
      padding-bottom: 50px; /* space for caption */
    }
    img {
      width: 100%;
      max-height: 600px;
      object-fit: contain;
      display: none;
      transition: opacity 0.3s ease;
    }
    img.active {
      display: block;
    }
    .caption {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
    .controls {
      margin: 10px 0;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 0 10px;
    }
  </style>
</head>
<body>
  <div class="carousel-container" id="carousel">
    <div class="carousel-slide" id="slide">
      <?php foreach ($images as $index => $image): ?>
        <img src="<?= htmlspecialchars($image) ?>" 
             alt="<?= getCaption($image) ?>" 
             class="<?= $index === 0 ? 'active' : '' ?>" 
             data-caption="<?= getCaption($image) ?>" />
      <?php endforeach; ?>
      <div class="caption" id="caption"></div>
    </div>
    <div class="controls">
    <button id="prevBtn">&#10094; Prev</button>
    <button id="nextBtn">Next &#10095;</button>
    <button id="stopBtn">Stop</button>
    <button id="startBtn">Start</button>
    </div>
  <script type="module" src="js/main.js"></script>

</body>
</html>
