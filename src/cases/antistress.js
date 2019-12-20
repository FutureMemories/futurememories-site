import { Component } from 'preact'
import inView from 'in-view'
import s from './antistress.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import DeviceBlock from './components/device-block'
import WaveObject from './components/wave-object'
import ParallaxBumpBlock from './components/parallax-bump-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child`,
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
      <Base route='/cases/antistress' dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='AntiStress'
              subtitle='Take a deep breath'
            />

            <LargeImage src='cases/antistress-1.jpg' alt='AntiStress phone mockups' />

            <CenterBlock
              inView='inViewBottom'
              modifer='antistress'
              title='Speak your mind'
              text='Together with VGR, we have developed an app for iOS and Android whose purpose is to act as a diary to see their progress or stress level and also listen to meditation soundtracks to reduce stress'
            >
              <DeviceBlock
                customClass={s.deviceBlock}
                ios='https://itunes.apple.com/se/app/antistress/id1451950583?mt=8'
              />
              <WaveObject
                customClass={s.waves}
                ease='SineInOut'
                wavesWidth='90%'
                speed={12}
                height={155}
                waves={[
                  { lineWidth: 1, amplitude: -80, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 1, amplitude: -55, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 1, amplitude: -20, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.7)' },
                  { lineWidth: 1, amplitude: 45, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 1, amplitude: 20, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 1, amplitude: 70, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 1, amplitude: 110, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.5)' },
                  { lineWidth: 2, amplitude: 150, wavelength: 150, strokeStyle: 'rgba(151, 203, 222, 0.8)' }
                ]}
              />
            </CenterBlock>

            <ParallaxBumpBlock
              inView='inViewRight'
              title='Putting your stress to the test'
              text={[
                'Every fifth woman in the Västra Götaland region has contacted primary care due to stress-related mental illness and the number is increasing. 21.1 percent of women sought help in 2016, which can be compared with 20 percent in 2015.',
                'In order to meet the large group affected by stress-related mental illness, development of new innovative methods is needed. The app\'s interface is designed with calm colors in mind and a color spectra that illustrate the balance between feelings while moving in a harmonious movement when you start the app.'
              ]}
              items={[
                { image: 'cases/antistress-phone-3.png', alt: 'AntiStress phone mockup', speed: -15, startPos: 53, width: '412px', align: 'right' },
                { image: 'cases/antistress-phone-2.png', alt: 'AntiStress phone mockup', speed: -28, startPos: -30, width: '522px', align: 'right' },
                { image: 'cases/antistress-phone-1.png', alt: 'AntiStress phone mockup', speed: 0, startPos: -115, width: '568px', align: 'right' }
              ]}
              background='#FAFAFA'
            />

            <CenterBlock
              inView='inViewBottom'
              title='Exercising conscious breathing makes you better equipped when stress strikes, and potentially preventing it.'
              src={{ path: 'cases/antistress-2.jpg', style: { maxHeight: '715px' } }}
              alt='AntiStress gradient background'
              color='#ffffff'
            />

            <ProjectsBlock
              current='antistress'
              similar={['sleepcure', 'retts-plus', 'stc']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
