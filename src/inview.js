import inView from 'in-view'

const selectors = [
  '.bookmark-block .content',
  '.center-block',
  '.devices-block',
  '.grid-block.-more-projects',
  '.parallax-bump-block',
  '.parallax-object-block',
  '.slide-in-block',
  '.text-block',
  '.text-block-multiple',
  '.text-grid-block',
  '.three-block'
].join(',')

if (document.body.classList.contains('-case')) {
  inView.offset(200)
  inView(selectors).on('enter', el => {
    el.classList.add('-inview')
  })
}
