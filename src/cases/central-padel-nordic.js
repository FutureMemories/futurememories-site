import { Component } from 'preact'
import inView from 'in-view'
// import cx from 'classnames'
import s from './central-padel-nordic.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
// import CenterBlock from './components/center-block'
import SideBySideBlock from './components/side-by-side-block'
// import TextTwoCol from './components/text-two-col'
import LargeImage from './components/large-image'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div`,
  `${s.inner} > div:nth-child(4) > div`,
  `${s.inner} > div:nth-child(5) > img`,
  `${s.inner} > div:nth-child(8) > div`
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
    const content = data.allCases.find(c => c.id === 'central-padel-nordic')

    return (
      <Base route='/cases/cpn' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              src='cases/cpn-1-desktop-2x.png'
              mobileSrc='cases/cpn-1-mobile-2x.png'
              alt='Logo.'
            />

            <SideBySideBlock
              inView='inViewLeft'
              modifier='central-padel-nordic-reverse'
              blocks={[
                { image: 'cases/cpn-2-desktop-2x.png' },
                { text: { title: content.lifestyleTitle, p: content.lifestyleText } }
              ]}
            />

            <SideBySideBlock
              inView='inViewRight'
              modifier='central-padel-nordic'
              blocks={[
                { text: { title: content.perfectMatchTitle, p: content.perfectMatchText } },
                { image: 'cases/cpn-3-desktop-2x.png' }
              ]}
            />

            <div className={s.brandBlock}>
              <img src={require('../images/cases/cpn-4-1.svg')} alt='Central Padel Nordic, Padel' className='inViewLeft' />
              <img src={require('../images/cases/cpn-4-2.svg')} alt='Central Padel Nordic, Wellness' className='inViewRight' />
              <img src={require('../images/cases/cpn-4-3.svg')} alt='Central Padel Nordic, Lifestyle' className='inViewBottom' />
            </div>

            <LargeImage
              src='cases/cpn-5-desktop.svg'
              mobileSrc='cases/cpn-5-mobile.svg'
              alt='Typography.'
              modifier='central-padel-nordic'
            />

            <LargeImage
              src='cases/cpn-6-desktop-2x.png'
              mobileSrc='cases/cpn-6-mobile-2x.png'
              alt='Logo with tennis balls.'
            />

            <SideBySideBlock
              modifier='central-padel-nordic'
              inView='inViewRight'
              blocks={[
                { image: 'cases/cpn-7-1-2x.png' },
                { image: 'cases/cpn-7-2-2x.png' }
              ]}
            />

            <LargeImage
              src='cases/cpn-8-desktop-2x.png'
              mobileSrc='cases/cpn-8-mobile-2x.png'
              alt='Showcasing different layouts.'
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='nordish-market'
              similar={['proflight', 'retts-plus', 'mat-se']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
