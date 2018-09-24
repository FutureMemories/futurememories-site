const parallaxObjects = document.querySelectorAll('.parallax-object')

if (parallaxObjects.length > 0) {
  let parallaxes = []
  parallaxObjects.forEach(function (div) {
    const speed = div.getAttribute('data-parallax-speed')
    parallaxes.push({ 'data': div, 'offsetTop': div.offsetTop, 'speed': speed })
  })

  const parallaxObject = () => {
    const scrollPoint = window.pageYOffset + window.innerHeight
    for (let i = 0; i < parallaxes.length; i++) {
      let parallax = parallaxes[i]
      if (scrollPoint > parallax.offsetTop) {
        const positon = (scrollPoint - parallax.offsetTop) / parallax.speed
        parallax.data.style.transform = `translateY(${positon.toFixed(1)}px)`
      }
    }
  }

  setInterval(() => {
    window.requestAnimationFrame(parallaxObject)
  }, 100)
}
