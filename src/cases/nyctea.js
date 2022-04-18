import { Component } from 'preact'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import SideBySideBlock from './components/side-by-side-block'

import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './nyctea.sass'

export default class extends Component {
  state = {}

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'nyctea')

    const possibleTitleArray = content.possibleTitle.split('\b')
    const possibleTitleChildren = possibleTitleArray.map((element, key) => <span key={key} className={key === 1 && s.strike}>{element}</span>)

    return (
      <Base route='/cases/nyctea' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              src='cases/nyctea-1-desktop.png'
              mobileSrc='cases/nyctea-1-mobile.png'
              alt='Nyctea logo med uggla.'
              modifier='nyctea'
            />

            <SideBySideBlock
              modifier='nyctea'
              blocks={[
                { text: { title: content.aboutTitle, p: content.aboutText } },
                { image: 'cases/nyctea-2.svg' }
              ]}
            />

            <LargeImage
              src='cases/nyctea-3-desktop.png'
              mobileSrc='cases/nyctea-3-mobile.png'
              alt='Nyctea logo with an owl.'
              modifier='nyctea'
            />

            <SideBySideBlock
              modifier='nycteaPossible'
              blocks={[
                { text: { title: possibleTitleChildren, p: content.possibleText } },
                { image: 'cases/nyctea-4.png' }
              ]}
            />

            <LargeImage
              src='cases/nyctea-5-desktop.svg'
              mobileSrc='cases/nyctea-5-mobile.svg'
              alt='Nyctea typography.'
              modifier='nyctea'
            />

            <LargeImage
              src='cases/nyctea-6-desktop-1x.png'
              mobileSrc='cases/nyctea-6-mobile-1x.png'
              alt='Nyctea gradient.'
              modifier='nyctea'
            />

            <LargeImage
              src='cases/nyctea-7-desktop-1x.png'
              mobileSrc='cases/nyctea-7-mobile-1x.png'
              alt='Nyctea gradient.'
              modifier='nyctea'
            />

            <LargeImage
              src='cases/nyctea-8-desktop.png'
              alt='Nyctea components.'
              modifier='nyctea'
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='annotell'
              similar={['mat-se', 'nordish-market', 'bandbond']}
            />
          </div>
        </div>
      </Base>
    )
  }
}
