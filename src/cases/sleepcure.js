import { Component } from 'preact'
import inView from 'in-view'
import s from './sleepcure.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import ProjectsBlock from './components/projects-block'
import ThreeBlock from './components/three-block'
import DeviceBlock from './components/device-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child `,
  `${s.inner} > div:nth-child(5) > div:first-child > div`
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
      <Base title='SleepCure' dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='SleepCure'
              subtitle='Better Sleep, Better Life'
            />

            <LargeImage
              src='cases/sleepcure-1.png'
              alt='Sleepcure phone mockups'
              width='1025'
              height='630'
              background='linear-gradient(153deg, #F5D6D3 0%, #F5C4B8 100%)'
              modifier='sleepcure'
            />

            <CenterBlock
              inView='inViewBottom'
              title='Your digital sleep coach'
              text='SleepCure is a digital analysis and treatment method for people who want to sleep better. The assistant helps you to establish healthy sleep habits by assessing your daily routines. SleepCure gives advice in how they affect your sleep and how to adjust them.'
              background='#FFFFFF'
              color='#737780'
              modifer='sleepcure'
            />

            <ThreeBlock
              inView='inViewLeft'
              background={'#F6D7D3'}
              blocks={[
                { type: 'image', modifier: 'sleepcureImg', image: 'cases/sleepcure-2.png' },
                { type: 'text-array',
                  modifier: 'sleepcure',
                  array: [
                    { type: 'text', title: 'Research-based treatment', text: 'SleepCure is a CE-marked medical device for non-pharmacological treatment of sleeping disorders. It takes latest results in behaviour therapy and sleep research into account when giving advice on how to improve your sleep patterns.' },
                    { type: 'text', title: 'Your mobile assistant', text: 'SleepCure is available as an iPhone app and only requires a few minutes attention every day to reflect on your day. In return, the app provides you with advice on how to adjust your lifestyle for a better sleep and quality of life, little by little.' }
                  ] }
              ]}
            />

            <CenterBlock
              inView='inViewBottom'
              title='Oh, by the way'
              text='Future Memories was responsible for building the iOS app together with SleepCure. Our Lead Mobile Developer led and coached the SleepCure development team, all the way from first commit to App Store release.'
              background='#FFFFFF'
              color='#737780'
              modifer='sleepcureByTheWay'
            />

            <DeviceBlock
              customClass={s.deviceBlock}
              ios='https://apps.apple.com/se/app/sleepcure/id1457209729?l=en'
            />

            <ProjectsBlock
              current='sleepcure'
              similar={['antistress', 'retts-plus', 'picular']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
