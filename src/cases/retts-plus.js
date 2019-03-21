import { Component } from 'preact'
import inView from 'in-view'
import s from './retts-plus.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import TextBlockMultiple from './components/text-block-multiple'
import ParallaxObjectBlock from './components/parallax-object-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:last-child`,
  `${s.inner} > div:nth-child(5) > div:last-child`
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
      <Base title='Retts Plus'>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='RETTS PLUS'
              subtitle='Safe medical decisions'
            />

            <LargeImage
              src='cases/retts-plus-video.jpg'
              video='retts-plus.mp4'
              background='#000301'
            />

            <TextBlockMultiple
              inView='inViewBottom'
              title='Efficiency for patients'
              text='Predicare provides 95% of emergency departments in Sweden, and many in Norway, with a system that algorithmically classifies a patient according to the severity of their symptoms, and suggests the next course of action.'
              content={[
                `RETTS, Rapid Emergency Triage and Treatment System, works by measuring and assessing a number of vital parameters at the first examination, as well as by gathering a structured and standardised medical history regarding the reason for the visit and the patient’s current symptoms.`,
                `Based on a thorough user research phase we created a digital user interface that took advantage of the entire RETTS capability. We also developed a timeline that logged all interactions with each patient to provide a clearer overview of the patient’s entire care stay.`,
                `This project was nominated in the Design S, Sweden’s biggest and most comprehensive design award, backed by the entire design industry. The award is aimed at professional designers, architects, individual specialists, producers and companies that work with design in a broad sense.`
              ]}
              background='#070B13'
              color='#ffffff'
            />

            <SlideInBlock
              inView='inViewLeft'
              title='A clear overview'
              text={`Giving a doctor or nurse an overview of the patient's visit is a key feature for making the right decision and giving proper care. At the right time.`}
              image='cases/retts-plus-2.png'
              alt='Retts Plus tablet mockup'
              background='#090E18'
            />

            <SlideInBlock
              inView='inViewRight'
              title='Every step on the way'
              text={`We developed a timeline that shows the entire patient’s journey from first contact until it was time to go home. This improved the ability to track  events during a patient’s visit better, and enabled nurses and doctors to take make the correct decision at any point.`}
              image='cases/retts-plus-3.png'
              alt='Retts Plus tablet mockup'
              background='#090E18'
              align='right'
              modifier='moveUp'
            />

            <ParallaxObjectBlock
              items={[
                { image: 'cases/retts-plus-4.png', speed: -20, startPos: 17 },
                { image: 'cases/retts-plus-5.png', speed: 11, startPos: -39 }
              ]}
              background='#0C0F16'
              diagonal
            />

            <ProjectsBlock current='retts-plus' background='#070B13' />

          </div>
        </div>
      </Base>
    )
  }
}
