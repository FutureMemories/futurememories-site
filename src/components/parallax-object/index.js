const parallaxObjects = document.querySelectorAll('.parallax-object')

if (parallaxObjects.length > 0) {
  let parallaxes = []
  parallaxObjects.forEach(function (div) {
    parallaxes.push({ 'data': div, 'offsetTop': div.offsetTop })
  })

  const parallaxObject = () => {
    window.requestAnimationFrame(parallaxObject)
    const scrollPoint = window.pageYOffset + window.innerHeight
    for (let i = 0; i < parallaxes.length; i++) {
      let parallax = parallaxes[i]
      const speed = parallax.data.getAttribute('data-parallax-speed')
      if (scrollPoint > parallax.offsetTop) {
        parallax.data.style.transform = `translateY(${(scrollPoint - parallax.offsetTop) / speed}px)`
      }
    }
  }

  window.requestAnimationFrame(parallaxObject)
}
