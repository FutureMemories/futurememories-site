const parallaxBlocks = document.querySelectorAll('.parallax-scroll')

if (parallaxBlocks.length > 0) {
  let parallaxes = []
  parallaxBlocks.forEach(function (div) {
    div.querySelectorAll('.parallax-content').forEach(function (child) {
      parallaxes.push({ 'data': child, 'offsetTop': div.offsetTop, 'offsetBottom': div.offsetTop + div.offsetHeight })
    })
  })

  const parallaxMockup = () => {
    const scrollPoint = window.pageYOffset + (window.innerHeight / 2)
    for (let i = 0; i < parallaxes.length; i++) {
      let parallax = parallaxes[i]
      if (scrollPoint > parallax.offsetTop && window.pageYOffset < parallax.offsetBottom) {
        const positon = (scrollPoint - parallax.offsetTop) / 5
        parallax.data.style.transform = `translateY(-${positon.toFixed(1)}px)`
      }
    }
  }

  setInterval(() => {
    window.requestAnimationFrame(parallaxMockup)
  }, 100)
}
