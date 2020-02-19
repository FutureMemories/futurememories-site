import { Component } from 'preact'
import Base from '../_base'
import Moon from '../components/moon'
import { company } from '../data.json'
import s from './about.sass'

const data = [
  {
    label: 'We are 🤘',
    items: ['Designers', 'Front-End Developers', 'Specialists', 'Strategists', 'Back-End Developers', 'Illustrators', 'Collaborators', 'In-house']
  },
  {
    label: 'We love 💜',
    items: ['Space']
  },
  {
    label: 'We do 💅',
    items: ['Research', 'UI & UX', 'Product design & strategy', 'Web & mobile apps', 'Business development', 'Visual identities', 'Brand strategy & positioning', 'Data visualisation']
  }
]

export default class extends Component {
  render () {
    return (
      <Base title='About us' data={data}>
        <div class={s.view}>
          <div class={s.inner}>

            <div class={s.heroText}>
              <Moon position='bottomLeft' size='medium' background='blue' customClass={s.moon} />
              <h1>
              Based in the heart of <span>Gothenburg.</span> We create brands, products and marketing. And we use strategy, design, content and development to do it.
              </h1>
            </div>

            <div class={s.whoWeAre}>
              <div class={s.text}>
                <h1>It’s like rocket science</h1>
                <p>We are who we are and we are good at what we do.</p>
              </div>
              <div class={s.content}>
                {data.map((row, i) => (
                  <div key={'about_' + i} class={s.row}>
                    <h3>{row.label}</h3>
                    <ul class={s.list}>
                      {
                        row.items.map((item, i) => (
                          <li key={'about_item_' + i}>{item + i}}</li>
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
                  <div key={'partner_' + partner.name} class={s.partner}>
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
