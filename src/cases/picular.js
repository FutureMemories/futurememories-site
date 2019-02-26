import { Component } from 'preact'
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

export default class extends Component {
  render () {
    return (
      <Base dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='PICULAR'
              subtitle='Google, but for colors'
            />

            <LargeImage
              src='cases/picular-1.png'
              width='993'
              height='527'
              background='#F2F5F6'
              modifier='picular'
            >
              <div class={s.badges}>
                {badges.map(badge => (
                  <div class={s.badge}>
                    <img src={require(`../images/cases/${badge.img}`)} />
                    <div class={s.desc}>
                      <span class={s.title}>{badge.title}</span>
                      <span class={s.date}>{badge.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </LargeImage>

            <TextBlock
              title='Search engine for colors'
              text={`Picular is a rocket fast primary color generator using Google's image search. If you ever needed the perfect yellow hex code from a banana, this is the tool for you.`}
              link={['Visit the site', 'https://picular.co/']}
            />

            <BookmarkBlock
              title='Search engine for colors'
              text={`Picular is a rocket fast primary color generator using Google's image search. If you ever needed the perfect yellow hex code from a banana, this is the tool for you.`}
              items={[
                { name: 'Correct color tones', image: 'icons/droplet.svg' },
                { name: 'Grab the HEX color code', image: 'icons/hash.svg' },
                { name: 'See the reference image', image: 'icons/image.svg' }
              ]}
            >
              <ParallaxScroll frame='iphonex' background='cases/picular-screenshot-1.jpg' />
            </BookmarkBlock>

            <SlideInBlock
              title='Putting colors to words'
              text={`Picular helps designers to easily extract the most relevant colors for a specific context or domain. It helps to understand perception, psychology and aesthetics of a color or tone you’re interested in.`}
              image='cases/picular-2.png'
              background='#fff'
              align='right'
              modifier='noPadding'
            />

            <BrandBlock showcase='picular' background='#F2F5F6' />

            <ProjectsBlock current='picular' />

          </div>
        </div>
      </Base>
    )
  }
}