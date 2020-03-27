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
import ContactBlock from '../components/contact-block'

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

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'retts-plus')

    return (
      <Base route='/cases/retts-plus' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
            />

            <LargeImage
              src='cases/retts-plus-video.jpg'
              video='retts-plus.mp4'
              background='#000301'
            />

            <TextBlockMultiple
              inView='inViewBottom'
              title={content.efficiencyTitle}
              text={content.efficiencyText}
              content={content.efficiencyContent}
              background='#070B13'
              color='#ffffff'
            />

            <SlideInBlock
              inView='inViewLeft'
              title={content.clearOverviewTitle}
              text={content.clearOverviewText}
              image='cases/retts-plus-2.png'
              alt='Retts Plus tablet mockup'
              background='#090E18'
            />

            <SlideInBlock
              inView='inViewRight'
              title={content.everyStepTitle}
              text={content.everyStepText}
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

            <ContactBlock
              content={data.content.contactBlock}
              dark
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='retts-plus'
              similar={['proflight', 'antistress', 'sleepcure']}
              background='#070B13'
            />

          </div>
        </div>
      </Base>
    )
  }
}
