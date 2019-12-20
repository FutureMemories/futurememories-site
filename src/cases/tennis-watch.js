import { Component } from 'preact'
import inView from 'in-view'
import s from './tennis-watch.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'

const badges = [{
  img: 'tennis-watch-badge-best-new-app.svg',
  title: 'Apple App Store',
  alt: 'Best new app 2015'
}, {
  img: 'tennis-watch-badge-amazing-app.svg',
  title: 'Apple App Store',
  alt: 'Amazing app 2015'
}]

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:last-child`,
  `${s.inner} > div:nth-child(5) > div:last-child`,
  `${s.inner} > div:nth-child(6) > div:first-child > div`
].join(',.')

export default class extends Component {
  componentDidMount () {
    inView.offset(200)
    inView(`.${inViewClasses}`).on('enter', el => {
      el.classList.add('inView')
      if (el.classList.contains('tennisWatch')) {
        el.classList.add('tennisWatchShowPath')
      }
    })
  }

  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render () {
    return (
      <Base route='/cases/tennis-watch'>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='TENNIS WATCH'
              subtitle='Grand slam'
            />

            <LargeImage
              src='cases/tennis-watch-video.jpg'
              video='tennis-watch.mp4'
              background='#000301'
            >
              <div class={s.badges}>
                {badges.map((badge, i) => (
                  <div key={'tennis_badge_' + i} class={s.badge}>
                    <img alt={`Apple App Store prize: ${badge.alt}`} src={require(`../images/cases/${badge.img}`)} />
                    <div class={s.desc}>
                      <span class={s.title}>{badge.title}</span>
                      <span class={s.date}>{badge.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </LargeImage>

            <CenterBlock
              inView='inViewBottom'
              title='First in the game'
              text='Tennis Watch was the first tennis app designed for Apple Watch. It turns your Apple Watch into a simple and easy-to-use score tracking device. All matches are stored on your iPhone and sophisticated statistics give you insights on how to improve your game.'
              background='#161D2B'
              color='#fff'
            />

            <SlideInBlock
              inView='inViewLeft'
              title={'Match trends and\nperformance statistics'}
              text='Keep track of your progress with statistics and match trend trackning to improve your game. It’s all about winning right?'
              image={{ path: 'cases/tennis-watch-1.png', width: 427, height: 703, positon: 'inside' }}
              alt='Tennis Watch (phone and watch mockup)'
              background='#0C0F16'
              color='#fff'
              modifier='tennisWatch'
            />

            <SlideInBlock
              inView='inViewRight'
              title={'Tennis score tracker and\nstatistics for Apple Watch'}
              text='Keeping track of your matches and opponents. Designed for any scoring method.'
              image={{ path: 'cases/tennis-watch-2.png', width: 243, height: 438, positon: 'inside' }}
              alt='Tennis Watch (watch mockup)'
              background='#0C0F16'
              color='#fff'
              align='right'
            />

            <CenterBlock
              inView='inViewBottom'
              title='Match point.'
              src='cases/tennis-watch-3.jpg'
              alt='tennis match game'
              color='#fff'
            />

            <ProjectsBlock
              background='#0C0F16'
              current='tennis-watch'
              similar={['stc', 'proflight', 'picular']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
