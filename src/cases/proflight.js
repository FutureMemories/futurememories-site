import { Component } from 'preact'
import inView from 'in-view'
import s from './proflight.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextGridBlock from './components/text-grid-block'
import TextBlock from './components/text-block'
import CenterBlock from './components/center-block'
import ContactBlock from '../components/contact-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:last-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`
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
    const content = data.allCases.find(c => c.id === 'proflight')

    return (
      <Base route='/cases/proflight' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
            />

            <LargeImage src='cases/proflight-1.jpg' alt='proFLIGHT tablet mockup' />

            <CenterBlock
              inView='inViewBottom'
              title={content.flightmodeTitle}
              text={content.flightmodeText}
              background='#1A2132'
              color='#ffffff'
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/proflight-2.png' },
                { inView: 'inViewRight', title: content.skyLimitTitle, desc: content.skyLimitText },
                { inView: 'inViewRight', image: 'cases/proflight-3.png' }, { inView: 'inViewLeft', image: 'cases/proflight-4.png' }
              ]}
              background='#161D2B'
            />

            <TextBlock
              inView='inViewBottom'
              title={content.oneFlightAheadTitle}
              text={content.oneFlightAheadText}
              image={['Proflight Screenshoot', 'cases/proflight-5.png', 882]}
              background='#1A2132'
            />

            <ContactBlock
              content={data.content.contactBlock}
              dark
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='proflight'
              similar={['retts-plus', 'sleepcure', 'bandbond']}
              background='#161D2B'
            />

          </div>
        </div>
      </Base>
    )
  }
}
