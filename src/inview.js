import inView from 'in-view'

const selectors = [
  '.text-block',
  '.bookmark-block .content',
  '.devices-block',
  '.grid-block.-more-projects'
].join(',')

if (document.body.classList.contains('-case')) {
  inView.offset(200)
  inView(selectors).on('enter', el => {
    el.classList.add('-inview')
  })
}
