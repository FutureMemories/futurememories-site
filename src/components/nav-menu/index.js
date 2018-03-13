import smoothScroll from 'smoothscroll'

const navMenu = document.querySelector('.nav-menu')

if (navMenu) {
  const toggler = navMenu.querySelector('.toggler')
  const links = navMenu.querySelectorAll('a')

  toggler.addEventListener('click', () => {
    navMenu.classList.toggle('-open')
    document.body.classList.toggle('-locked')
  })

  toggler.addEventListener('mousedown', ev => ev.preventDefault())

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const id = link.href.substr(link.href.indexOf('#') + 1)
    const target = document.getElementById(id)

    link.addEventListener('click', (ev) => {
      navMenu.classList.remove('-open')
      document.body.classList.remove('-locked')

      ev.preventDefault()

      if (window.history.pushState) {
        window.history.pushState({}, '', '#' + id)
      }

      if (target) {
        smoothScroll(target)
      }
    })
  }
}
