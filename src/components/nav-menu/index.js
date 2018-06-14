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
    const id = link.href.substr(link.href.lastIndexOf('/') + 1)
    const target = document.getElementById(id.substr(1))

    link.addEventListener('click', (ev) => {
      if (document.location.pathname.length > 1) {
        return
      }

      navMenu.classList.remove('-open')
      document.body.classList.remove('-locked')

      ev.preventDefault()

      if (window.history.pushState) {
        if (id.includes('#'))
          window.history.pushState({}, '', id)
        else
          window.location.assign(`/${id}`)
      }

      if (target) {
        smoothScroll(target)
      }
    })
  }
}
