array_image = ['apple.jpg', 'keyboard.avif', 'group.avif', 'laptop1.jpg', 'laptop2.jpg']
let array_length = array_image.length
let i = 0

const sliderFunction = () => {
  if (i < 3) {
    i = 0
  }
  document.querySelector('#slider_img').src = `image/${array_image[i]}`
  // console.log(`image/${array_image[i]}`)
  i++
}

setInterval(sliderFunction, 3000)