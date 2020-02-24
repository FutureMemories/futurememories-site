import { Component } from 'preact'
import inView from 'in-view'
import Base from '../_base'
import s from './stc.sass'

import BookmarkBlock from './components/bookmark-block'
import CenterBlock from './components/center-block'
import DeviceBlock from './components/device-block'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ParallaxObjectBlock from './components/parallax-object-block'
import ProjectsBlock from './components/projects-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(6) > div:first-child > div`,
  `${s.inner} > div:nth-child(8) > div:first-child > div`,
  `${s.inner} > div:nth-child(9) > div:first-child > div`,
  `${s.inner} > div:nth-child(10) > div:first-child > div`,
  `${s.inner} > div:nth-child(11) > div:first-child > div`
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
    const content = data.allCases.find(c => c.id === 'stc')

    return (
      <Base route='/cases/stc' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
            />

            <LargeImage
              src='cases/stc-1.jpg'
              alt='STC website / mobile-app mockups'
              width='1246'
              height='615'
              background='#FE5302'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.stcTitle}
              text={content.stcText}
              background='#FFFFFF'
              color='#737780'
            />

            <BookmarkBlock
              className={s.websiteSection}
              title={content.strongerJourneyTitle}
              text={content.strongerJourneyText}
              inView='inViewLeft'
              image='cases/stc-2.jpg'
              background='white'
              color='#737780'
              align='left'
              link={[data.content.visitTheSite, 'https://stc.se/']}
            />

            <ParallaxObjectBlock
              className={s.horizontalParallax}
              items={[
                { image: 'cases/stc-3.jpg', speed: -20, startPos: -40 },
                { image: 'cases/stc-4.jpg', speed: 20, startPos: -70 }
              ]}
              horizontal
            />

            <CenterBlock
              className={s.appSection}
              inView='inViewBottom'
              title={content.newAppTitle}
              text={content.newAppText}
              background='#FFFFFF'
              color='#737780'
            />

            <CenterBlock
              src={{
                path: 'cases/stc-5.jpg',
                style: { maxHeight: '812px' }
              }}
              color='#ffffff'
            />

            <CenterBlock
              className={s.getAppSection}
              inView='inViewBottom'
              color='#737780'
              title={content.nowAvailableTitle}
              text={content.nowAvailableText}
            >
              <DeviceBlock
                customClass={s.deviceBlock}
                ios='https://apps.apple.com/us/app/stc-training-club/id575468749'
                andriod='https://play.google.com/store/apps/details?id=se.stc.trainingclub'
              />
              <img class={s.devices} src={require('../images/cases/stc-6.jpg')} />
            </CenterBlock>

            <BookmarkBlock
              className={s.lampSection}
              image='cases/stc-7.jpg'
              title={content.toningUpTitle}
              text={content.toningUpText}
              inView='inViewRight'
              align='left'
              background='white'
              color='#737780'
            >
              <div class={s.lamp}>
                <img src={require('../images/cases/stc-8.png')} />
              </div>
            </BookmarkBlock>

            <BookmarkBlock
              className={s.workoutSection}
              image='cases/stc-9.jpg'
              text={content.colourPaletteText}
              inView='inViewLeft'
              background='white'
              color='#737780'
            />

            <BookmarkBlock
              className={s.iconsBlock}
              title={content.newIconsTitle}
              text={content.newIconsText}
              inView='inViewLeft'
              background='#FAFAFA'
              color='#737780'
            >
              <div class={s.icons} />
            </BookmarkBlock>

            <LargeImage
              src='cases/stc-1.jpg'
              alt='STC website / mobile-app mockups'
              width='1246'
              height='615'
              background='#FE5302'
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='stc'
              similar={['bauer-university', 'mat-se', 'antistress']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
