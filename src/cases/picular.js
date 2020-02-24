import { Component } from 'preact'
import inView from 'in-view'
import s from './picular.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextBlock from './components/text-block'
import BookmarkBlock from './components/bookmark-block'
import ParallaxScroll from './components/parallax-scroll'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import BrandBlock from './components/brand-block'

const badges = [{
  img: 'picular-badge-1.svg',
  title: '#1 Product of the Day',
  date: 'August 22, 2018'
}, {
  img: 'picular-badge-2.svg',
  title: '#2 Product of the Week',
  date: 'August 22, 2018'
}, {
  img: 'picular-badge-3.svg',
  title: '#3 Product of the Month',
  date: 'August 2018'
}]

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:last-child`,
  `${s.inner} > div:nth-child(6) > div:first-child`
].join(',.')

export default class extends Component {
  componentDidMount () {
    inView.offset(200)
    inView(`.${inViewClasses}`).on('enter', el => {
      el.classList.add('inView')
    })
  }

  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'picular')

    return (
      <Base route='/cases/picular' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
            />

            <LargeImage
              src='cases/picular-1.png'
              alt='Picular desktop mockup'
              width='993'
              height='527'
              background='#F2F5F6'
              modifier='picular'
            >
              <div class={s.badges}>
                {badges.map((badge, i) => (
                  <div key={'picular_badge_' + i} class={s.badge}>
                    <img alt={`Product Hunt: ${badge.title}`} src={require(`../images/cases/${badge.img}`)} />
                    <div class={s.desc}>
                      <span class={s.title}>{badge.title}</span>
                      <span class={s.date}>{badge.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </LargeImage>

            <TextBlock
              inView='inViewBottom'
              title={content.searchEngineTitle}
              text={content.searchEngineText}
              link={[data.content.visitTheSite, 'https://picular.co/']}
            />

            <BookmarkBlock
              inView='inViewLeft'
              title={content.bookmarksTitle}
              text={content.bookmarksText}
              items={[
                { name: content.correctColorTones, image: 'icons/droplet.svg', alt: 'droplet icon' },
                { name: content.grabHex, image: 'icons/hash.svg', alt: 'hash icon' },
                { name: content.seeRefImg, image: 'icons/image.svg', alt: 'image icon' }
              ]}
              modifier='picular'
            >
              <ParallaxScroll frame='iphonex' background='cases/picular-screenshot-1.jpg' />
            </BookmarkBlock>

            <SlideInBlock
              inView='inViewRight'
              title={content.colorToWordsTitle}
              text={content.colorToWordsText}
              image='cases/picular-2.png'
              alt='Picular grid of colors'
              background='#fff'
              align='right'
              modifier='noPadding'
            />

            <BrandBlock
              inView='inViewBottom'
              showcase='picular'
              background='#F2F5F6'
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='picular'
              similar={['proflight', 'retts-plus', 'paykartan']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
