const images = document.querySelectorAll('img[id^="img"]');

function setImageSource(images, folder) {
  images.forEach((image, index) => {
    image.src = `img/portfolio/${folder}-${index + 1}.jpg`;
  });
}

function imageAll() {
  setImageSource(images, 'photo');
}

function imageFashion() {
  setImageSource(images, 'fashion');
}

function imagePortrait() {
  setImageSource(images, 'portrait');
}
