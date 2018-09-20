const parallaxObjects = document.querySelectorAll('.parallax-object')

if (parallaxObjects.length > 0) {
  let parallaxes = []
  parallaxObjects.forEach(function (div) {
    const speed = div.getAttribute('data-parallax-speed')
    parallaxes.push({ 'data': div, 'offsetTop': div.offsetTop, 'speed': speed })
  })

  const parallaxObject = () => {
    window.requestAnimationFrame(parallaxObject)
    const scrollPoint = window.pageYOffset + window.innerHeight
    for (let i = 0; i < parallaxes.length; i++) {
      let parallax = parallaxes[i]
      if (scrollPoint > parallax.offsetTop) {
        parallax.data.style.transform = `translateY(${(scrollPoint - parallax.offsetTop) / parallax.speed}px)`
      }
    }
  }

  window.requestAnimationFrame(parallaxObject)
}
