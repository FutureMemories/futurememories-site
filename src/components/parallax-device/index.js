const parallaxBlock = document.querySelector('.parallax-device')

if (parallaxBlock) {
  function parallaxMockup () {
    window.requestAnimationFrame(parallaxMockup)
    const scrollPoint = document.documentElement.scrollTop + (window.innerHeight / 2)
    document.querySelectorAll('.parallax-device').forEach(function (div) {
      if (scrollPoint > div.offsetTop) {
        div.querySelectorAll('.parallax-content').forEach(function (child) {
          // Scroll solution: child.scrollTop = (scrollPoint - div.offsetTop) / 3
          child.style.transform = `translateY(-${(scrollPoint - div.offsetTop) / 5}px)`
        })
      }
    })
  }
  window.requestAnimationFrame(parallaxMockup)
}
