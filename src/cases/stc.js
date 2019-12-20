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

  render () {
    return (
      <Base route='/cases/stc' dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='STC'
              subtitle='Making training easy!'
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
              title='STC'
              text='STC is one of the leading fitness companies in Sweden with +80 gyms and fitness centres covering the entire country. The company employs approximately 1000 people and has been on  steady growth since it was founded in 1998.'
              background='#FFFFFF'
              color='#737780'
            />

            <BookmarkBlock
              className={s.websiteSection}
              title='A stronger user journey'
              text={[
                  "For the new stc.se we have provided an entire re-design and a new content management system to strengthen the user experience. We have simplified the checkout flow to make it easier to purchase the right membership. By building a filtering functionality we created a more user friendly experience where we only show tailored membership suggestions suitable for each and every individuals’ need.",
                  'The result became an entirely new website using only state of the art technology to gear up for a bright future']}
              inView='inViewLeft'
              image='cases/stc-2.jpg'
              background='white'
              color='#737780'
              align='left'
              link={['Visit the site', 'https://stc.se/']}
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
              title='New app, new design'
              text='We have re-designed and re-built the app from the ground up. It is now more reliable with faster loading times, better filtering and more brand consistent.'
              background='#FFFFFF'
              color='#737780'
            />

            <CenterBlock
              src={{ path: 'cases/stc-5.jpg',
                style: { maxHeight: '812px' } }}
              color='#ffffff'
            />

            <CenterBlock
              className={s.getAppSection}
              inView='inViewBottom'
              color='#737780'
              title='Now available'
              text='The app makes it simple to book classes, get a full overview of your training schedule and manage your account details on the go.'
            >
              <DeviceBlock
                customClass={s.deviceBlock}
                ios='https://apps.apple.com/us/app/stc-training-club/id575468749'
                // andriod='https://....'
              />
              <img class={s.devices} src={require('../images/cases/stc-6.jpg')} />
            </CenterBlock>

            <BookmarkBlock
              className={s.lampSection}
              image='cases/stc-7.jpg'
              title='Toning up the brand experience'
              text={[
                  'We’ve enhanced the customer journey by connecting the digital experience with the physical environment in the gyms.',
                  'Our work began by looking at STCs new interior design concept to link their new digital environment with their physical experience.'
              ]}
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
              text={[
                  'The colour palette we created comes from larger and smaller details from actual physical environment, for example, the lamps in the entrance in a local gym gave colour to Dance & Choreography and the colour of the walls gave colour to the Core classes.'
              ]}
              inView='inViewLeft'
              background='white'
              color='#737780'
            />

              <BookmarkBlock
                className={s.iconsBlock}
                title='New icons'
                text={[
                    'To create a more coherent overview of STCs broad range of membership offers, we designed a various number of icons to pinpoint their product range both physically and digitally. These icons can now be found throughout the entire customer journey which strengthens brand recognition all the way from the web to the treadmill. '
                        ]}
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
              current='stc'
              similar={['bauer-university', 'mat-se', 'antistress']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
