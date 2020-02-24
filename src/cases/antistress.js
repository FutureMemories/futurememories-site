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

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'antistress')

    return (
      <Base route='/cases/antistress' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
            />

            <LargeImage src='cases/antistress-1.jpg' alt={content.imageAlt} />

            <CenterBlock
              inView='inViewBottom'
              modifer='antistress'
              title={content.speakYourMindTitle}
              text={content.speakYourMindText}
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
              title={content.stressTitle}
              text={content.stressText}
              items={[
                { image: 'cases/antistress-phone-3.png', alt: content.imageAlt, speed: -15, startPos: 53, width: '412px', align: 'right' },
                { image: 'cases/antistress-phone-2.png', alt: content.imageAlt, speed: -28, startPos: -30, width: '522px', align: 'right' },
                { image: 'cases/antistress-phone-1.png', alt: content.imageAlt, speed: 0, startPos: -115, width: '568px', align: 'right' }
              ]}
              background='#FAFAFA'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.exerciseTitle}
              src={{ path: 'cases/antistress-2.jpg', style: { maxHeight: '715px' } }}
              alt={content.exerciseAlt}
              color='#ffffff'
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='antistress'
              similar={['sleepcure', 'retts-plus', 'stc']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
