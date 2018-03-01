import Modernizr from 'browsernizr'

const cards = document.querySelectorAll('.astronaut-card')

const mouseMove = (card, shine) => ev => {
  const rect = card.getBoundingClientRect()
  const mouseX = ev.clientX - rect.left
  const mouseY = ev.clientY - rect.top
  const x = (0.5 - (mouseX / rect.width)) * 1
  const y = (0.5 - (mouseY / rect.height)) * -1
  const deg = Math.atan2(-y, x) * 180 / Math.PI + 90

  card.style.transform = `perspective(20rem) translateZ(0.1rem) rotateX(${y}deg) rotateY(${x}deg)`
  shine.style.background = `linear-gradient(${deg}deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))`
}

if (!Modernizr.touchevents) {
  for (let i = 0; i < cards.length; i++) {
    const wrapper = cards[i]
    const card = wrapper.querySelector('.card')
    const shine = card.querySelector('.shine')
    wrapper.addEventListener('mousemove', mouseMove(card, shine))
  }
}
