import { Component } from 'preact'
import Base from '../_base'
import Moon from '../components/moon'
import { company } from '../data.json'
import s from './about.sass'

const data = [
  {
    label: 'We are',
    items: ['Designers', 'Front-End Developers', 'Specialists', 'Strategists', 'Back-End Developers', 'Consultants', 'Illustrators', 'Collaborators']
  },
  {
    label: 'We are not',
    items: ['Lost in space', 'Backward thinking', 'Boring', 'Freelancers']
  },
  {
    label: 'We do',
    items: ['Brand strategy & positioning', 'Research', 'UI & UX', 'Websites', 'Mobile applications', 'Visual identities', 'Product design', 'Data visualisation']
  }
]

export default class extends Component {
  render () {
    return (
      <Base>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.heroText} >
              <Moon position='bottomLeft' size='medium' background='blue' customClass={s.moon} />
              <h1>
              Based in the heart of <span>Gothenburg.</span> We create brands, products and marketing. And we use strategy, design, content and development to do it.
              </h1>
            </div>

            <div class={s.whoWeAre}>
              <div class={s.text}>
                <h1>It is not rocket science</h1>
                <p>We develop cutting-edge platforms and apps of exceptional quality in a short space of time.</p>
              </div>
              <div class={s.content}>
                {data.map(row => (
                  <div class={s.row}>
                    <h3>{row.label}</h3>
                    <ul class={s.list}>
                      {
                        row.items.map(item => (
                          <li>{item}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div class={s.partners}>
              <Moon position='topRight' size='extraSmall' background='blue' customClass={s.smallMoon} />
              <Moon position='topLeft' size='medium' background='blue' customClass={s.moon} style='opacity: 0.5;' />
              <div class={s.text}>
                <h1>Howdy, partner!</h1>
                <p>Say hi to some of our partners</p>
              </div>
              <div class={s.content}>
                {company.partners.map(partner => (
                  <div class={s.partner}>
                    <img alt={`${partner.name} logo`} src={require(`../images/${partner.logo}`)} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Base>
    )
  }
}
