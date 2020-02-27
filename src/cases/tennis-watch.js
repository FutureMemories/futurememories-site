import { Component } from 'preact'
import inView from 'in-view'
import s from './tennis-watch.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import ContactBlock from '../components/contact-block'

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

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'tennis-watch')

    return (
      <Base route='/cases/tennis-watch' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
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
              title={content.firstInGameTitle}
              text={content.firstInGameText}
              background='#161D2B'
              color='#fff'
            />

            <SlideInBlock
              inView='inViewLeft'
              title={content.matchTrendsTitle}
              text={content.matchTrendsText}
              image={{ path: 'cases/tennis-watch-1.png', width: 427, height: 703, positon: 'inside' }}
              alt='Tennis Watch (phone and watch mockup)'
              background='#0C0F16'
              color='#fff'
              modifier='tennisWatch'
            />

            <SlideInBlock
              inView='inViewRight'
              title={content.tennisScoreTitle}
              text={content.tennisScoreText}
              image={{ path: 'cases/tennis-watch-2.png', width: 243, height: 438, positon: 'inside' }}
              alt='Tennis Watch (watch mockup)'
              background='#0C0F16'
              color='#fff'
              align='right'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.matchPoint}
              src='cases/tennis-watch-3.jpg'
              alt='tennis match game'
              color='#fff'
            />

            <ContactBlock
              content={data.content.contactBlock}
              dark
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
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
