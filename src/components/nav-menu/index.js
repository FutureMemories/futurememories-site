const navMenu = document.querySelector('.nav-menu')
const toggler = navMenu.querySelector('.toggler')

toggler.addEventListener('click', () => (
  navMenu.classList.toggle('-open')
))
