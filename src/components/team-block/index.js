import debounce from 'debounce'

const padding = 15
const block = document.querySelector('.team-block')
const cardInfos = block.querySelectorAll('.astronaut-card .info')
const handleHeights = () => {
  for (let i = 0; i < cardInfos.length; i++) {
    let info = cardInfos[i]
    info.style.height = 'auto'
    info.style.height = `${info.scrollHeight + padding}px`
  }
}

handleHeights()
window.addEventListener('resize', debounce(handleHeights, 200))
