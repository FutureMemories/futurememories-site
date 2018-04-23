import Modernizr from 'browsernizr'

const cards = document.querySelectorAll('.grid-card')

const mouseMove = (card, shine) => ev => {
  const rect = card.element.getBoundingClientRect()
  const mouseX = ev.clientX - rect.left
  const mouseY = ev.clientY - rect.top
  const x = (0.5 - (mouseX / rect.width)) * 1
  const y = (0.5 - (mouseY / rect.height)) * -1
  const deg = Math.atan2(-y, x) * 180 / Math.PI + 90

  card.target.perspective = 20
  card.target.translateZ = 0.1
  card.target.rotateX = y
  card.target.rotateY = x

  shine.style.background = `linear-gradient(${deg}deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))`
}

const mouseOut = (card) => ev => {
  card.target.perspective = 0
  card.target.translateZ = 0
  card.target.rotateX = 0
  card.target.rotateY = 0
}

const ease = (target, current) => {
  const value = current + ((target - current) * 0.1)
  return value < 0.0001 ? 0 : value
}

const toggleOpen = (wrapper) => ev => {
  wrapper.classList.toggle('-open')

  for (let i = 0; i < cards.length; i++) {
    if (cards[i] !== wrapper) {
      cards[i].classList.remove('-open')
    }
  }
}

if (Modernizr.touchevents) {
  for (let i = 0; i < cards.length; i++) {
    const wrapper = cards[i]
    wrapper.addEventListener('touchend', toggleOpen(wrapper))
  }
} else {
  const _cards = []

  for (let i = 0; i < cards.length; i++) {
    const wrapper = cards[i]
    const element = wrapper.querySelector('.card')
    const shine = element.querySelector('.shine')
    const card = {
      element,
      current: {
        perspective: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0
      },
      target: {
        perspective: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0
      }
    }

    _cards.push(card)
    wrapper.addEventListener('mousemove', mouseMove(card, shine))
    wrapper.addEventListener('mouseleave', mouseOut(card))
  }

  const animate = (time) => {
    _cards.forEach(card => {
      card.current.perspective = ease(card.target.perspective, card.current.perspective)
      card.current.translateZ = ease(card.target.translateZ, card.current.translateZ)
      card.current.rotateX = ease(card.target.rotateX, card.current.rotateX)
      card.current.rotateY = ease(card.target.rotateY, card.current.rotateY)

      card.element.style.transform = `perspective(20rem) translateZ(${card.current.translateZ}rem) rotateX(${card.current.rotateX}deg) rotateY(${card.current.rotateY}deg)`
    })

    window.requestAnimationFrame(animate)
  }
  window.requestAnimationFrame(animate)
}
