import debounce from 'debounce'

const block = document.querySelector('.team-block')
const infoBlocks = block.querySelectorAll('.item .info')
const handleHeights = () => {
  for (let i = 0; i < infoBlocks.length; i++) {
    let info = infoBlocks[i]
    info.style.height = 'auto'
    info.style.height = `${info.scrollHeight}px`
  }
}

handleHeights()
window.addEventListener('resize', debounce(handleHeights, 200))
