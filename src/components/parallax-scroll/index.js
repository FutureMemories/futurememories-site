const parallaxBlocks = document.querySelectorAll('.parallax-scroll')

if (parallaxBlocks.length > 0) {
  let parallaxes = []
  parallaxBlocks.forEach(function (div) {
    div.querySelectorAll('.parallax-content').forEach(function (child) {
      parallaxes.push({ 'data': child, 'offsetTop': div.offsetTop })
    })
  })

  const parallaxMockup = () => {
    window.requestAnimationFrame(parallaxMockup)
    const scrollPoint = window.pageYOffset + (window.innerHeight / 2)
    for (let i = 0; i < parallaxes.length; i++) {
      let parallax = parallaxes[i]
      if (scrollPoint > parallax.offsetTop) {
        parallax.data.style.transform = `translateY(-${(scrollPoint - parallax.offsetTop) / 5}px)`
      }
    }
  }

  window.requestAnimationFrame(parallaxMockup)
}
