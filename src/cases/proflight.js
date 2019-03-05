import { Component } from 'preact'
import s from './proflight.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextBlockMultiple from './components/text-block-multiple'
import TextGridBlock from './components/text-grid-block'
import TextBlock from './components/text-block'

export default class extends Component {
  render () {
    return (
      <Base>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='proFLIGHT'
              subtitle='Pilot Decision support'
            />

            <LargeImage src='cases/proflight-1.jpg' />

            <TextBlockMultiple
              title='Flightmode on'
              text='The AVTECH Aventus SIGMA is a unique weather uplink service that sends weather alerts directly to the pilots’ tablet devices. The app is used in the cockpit during flight to optimise comfort and fuel efficiency.'
              content={[
                `Aventus SIGMA, a high-quality tool that very adequately presents Weather hazards (such as Icing, Turbulence, Volcanic ash, etc) to your aircraft, is a real-time weather alerting system which communicates through ACARS and assures your company’s aircraft are notified to new meteorological hazards related to the actual route in the FMS. `,
                `The design of Aventus SIGMA reduces pilot workload and relieves the crew of difficult and inexact interpretation of weather maps, who sometimes can be 6 hours old.`,
                `Made in collaboration with Future Memories, Invencon and AVTECH.`
              ]}
              background='#1A2132'
              color='#ffffff'
            />

            <TextGridBlock
              blocks={[
                { image: 'cases/proflight-2.png' },
                { title: 'Turbulence is so 2017', desc: `Because the pilots can get a weather report with current winds, they can plan their flight to avoid any turbulence and get a more fuel efficient, smoother journey.` },
                { image: 'cases/proflight-3.png' }, { image: 'cases/proflight-4.png' }
              ]}
              background='#161D2B'
            />

            <TextBlock
              title={`One flight ahead`}
              text={`Combining the real time access to high resolution weather and flight path optimization, assists the pilot in making better pre- and in-flight decisions leading to a safer and more efficient flight.`}
              image={['Paykartan Screenshoot - gothenburg', 'cases/proflight-5.png', 882]}
              background='#1A2132'
            />

            <ProjectsBlock current='proflight' background='#161D2B' />

          </div>
        </div>
      </Base>
    )
  }
}
