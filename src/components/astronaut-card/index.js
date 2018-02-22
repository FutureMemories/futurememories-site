import Modernizr from 'browsernizr'

const cards = document.querySelectorAll('.astronaut-card')

const mouseMove = card => ev => {
  const rect = card.getBoundingClientRect()
  const mouseX = ev.clientX - rect.left
  const mouseY = ev.clientY - rect.top
  const x = (0.5 - (mouseX / rect.width)) * 5
  const y = (0.5 - (mouseY / rect.height)) * -5

  card.style.transform = `perspective(20rem) translateZ(1rem) rotateX(${y}deg) rotateY(${x}deg)`
}

if (!Modernizr.touchevents) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousemove', mouseMove(cards[i]))
  }
}
