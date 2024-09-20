array_image = ['apple.jpg', 'keyboard.avif', 'group.avif', 'laptop1.jpg']
let array_length = array_image.length
let i = 0

const sliderFunction = () => {
  if (i >= array_length) {
    i = 0
  }

  document.querySelector('#slider_img').src = `image/${array_image[i]}`
  i++;
}

let set = setInterval(sliderFunction, 3000);

//Event listener for the right button (next image)
document.querySelector('.image-slider .right').addEventListener('click', () => {
  if (i >= array_length) {
    i = 0;
  }
  document.querySelector('#slider_img').src = `image/${array_image[i]}`;
  i++;
});

document.querySelector('.image-slider .left').addEventListener('click', () => {
  if (i < 0) {
    i = array_length - 1
  }

  document.querySelector('img').src = `image/${array_image[i]}`
  i--
})


document.querySelector('.image-slider').addEventListener('mouseover', () => {
  clearInterval(set)
})

document.querySelector('.image-slider').addEventListener('mouseout', () => {
  set = setInterval(sliderFunction, 3000);
})
