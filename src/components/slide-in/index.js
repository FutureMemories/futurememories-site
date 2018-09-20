const slideIn = document.querySelectorAll('.slide-in')

if (slideIn.length > 0) {
  let sliders = []

  slideIn.forEach(function (div) {
    sliders.push({ 'data': div, 'offsetTop': div.offsetTop }) // 'offsetBottom': div.offsetTop + div.offsetHeight
  })

  const slideIt = () => {
    window.requestAnimationFrame(slideIt)
    const scrollPoint = window.pageYOffset + (window.innerHeight - 70)
    for (let i = 0; i < sliders.length; i++) {
      let slide = sliders[i]
      if (scrollPoint > slide.offsetTop) { // && window.pageYOffset + 70 < slide.offsetBottom
        slide.data.classList.add('-left')
      } else {
        if (slide.data.classList.contains('-left')) {
          slide.data.classList.add('-back')
          setTimeout(() => {
            slide.data.classList.remove('-left')
            slide.data.classList.remove('-back')
          }, 300)
        }
      }
    }
  }

  window.requestAnimationFrame(slideIt)
}
