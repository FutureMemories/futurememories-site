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

  render ({ data }) {
    const content = data.allCases.find(c => c.id === 'sleepcure')

    return (
      <Base route='/cases/sleepcure' dark data={data}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
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
              title={content.sleepCoachTitle}
              text={content.sleepCoachText}
              background='#FFFFFF'
              color='#737780'
              modifer='sleepcure'
            />

            <ThreeBlock
              inView='inViewLeft'
              background='#F6D7D3'
              blocks={[
                { type: 'image', modifier: 'sleepcureImg', image: 'cases/sleepcure-2.png' },
                {
                  type: 'text-array',
                  modifier: 'sleepcure',
                  array: [
                    { type: 'text', title: content.researchBasedTitle, text: content.researchBasedText },
                    { type: 'text', title: content.mobileAssistantTitle, text: content.mobileAssistantText }
                  ]
                }
              ]}
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.byTheWayTitle}
              text={content.byTheWayText}
              background='#FFFFFF'
              color='#737780'
              modifer='sleepcureByTheWay'
            />

            <DeviceBlock
              customClass={s.deviceBlock}
              ios='https://apps.apple.com/se/app/sleepcure/id1457209729?l=en'
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='sleepcure'
              similar={['antistress', 'retts-plus', 'proflight']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
