import { Component } from 'preact'
import s from './tennis-watch.sass'
import Base from '../_base'

import LargeImage from './components/large-image'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'

const badges = [{
  img: 'tennis-watch-badge-best-new-app.svg',
  title: 'Apple App Store'
}, {
  img: 'tennis-watch-badge-amazing-app.svg',
  title: 'Apple App Store'
}]

export default class extends Component {
  render () {
    return (
      <Base>
        <div class={s.view} >
          <div class={s.inner}>

            <div class={s.heroHeader}>
              <h1>TENNIS WATCH</h1>
              <h2>Grand slam</h2>
            </div>

            <LargeImage
              src='cases/tennis-watch-video.jpg'
              video='tennis-watch.mp4'
              background='#000301'
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

            <CenterBlock
              title='First in the game'
              text='Tennis Watch was the first tennis app designed for Apple Watch. It turns your Apple Watch into a simple and easy-to-use score tracking device. All matches are stored on your iPhone and sophisticated statistics give you insights on how to improve your game.'
              background='#161D2B'
              color='#fff'
            />

            <SlideInBlock
              title={`Match trends and\nperformance statistics`}
              text={`Keep track of your progress with statistics and match trend trackning to improve your game. It’s all about winning right?`}
              image={{ path: 'cases/tennis-watch-1.png', width: 427, height: 703, positon: 'inside' }}
              background='#0C0F16'
              color='#fff'
              modifier='tennisWatch'
            />

            <SlideInBlock
              title={`Tennis score tracker and\nstatistics for Apple Watch`}
              text={`Keeping track of your matches and opponents. Designed for any scoring method.`}
              image={{ path: 'cases/tennis-watch-2.png', width: 243, height: 438, positon: 'inside' }}
              background='#0C0F16'
              color='#fff'
              align='right'
            />

            <CenterBlock
              title='Match point.'
              src='cases/tennis-watch-3.jpg'
              color='#fff'
            />

            <ProjectsBlock background='#0C0F16' current='tennis-watch' />

          </div>
        </div>
      </Base>
    )
  }
}
