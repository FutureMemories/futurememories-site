import debounce from 'debounce'

const infoBlocks = document.querySelectorAll('.grid-block .item .info')
const handleHeights = () => {
  for (let i = 0; i < infoBlocks.length; i++) {
    let info = infoBlocks[i]
    info.style.height = 'auto'
    info.style.height = `${info.scrollHeight}px`
  }
}

if (infoBlocks.length > 0) {
  handleHeights()
  window.addEventListener('resize', debounce(handleHeights, 200))

  // TODO: Wait for font load in a better way
  setTimeout(handleHeights, 3000)
}
