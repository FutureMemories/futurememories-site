import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import SideBySideBlock from './components/side-by-side-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './kludd.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(2) > img`,
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div > div`,
  `${s.inner} > div:nth-child(8) > div > div`,
  `${s.inner} > div:nth-child(10)`,
  `${s.inner} > div:nth-child(11) > img`
].join(',.')

export default class extends Component {
  state = {}

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
    const content = data.allCases.find(c => c.id === 'kludd')

    return (
      <Base route='/cases/kludd' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              src='cases/kludd-large.png'
              alt='The kludd editor with a document open.'
              width='1200'
              background='#F8F8F9'
              modifier='kludd'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              link={[content.visitTheSite, 'https://www.kludd.co/']}
              background='#FFFFFF'
              color='#070B13'
            />

            <div class={s.appImagesBlock}>
              <div class={s.inner}>
                <div class={s.backgroundGrid}>
                  <div />
                  <div class={cx(s.hideOnMobile, s.big)} />
                  <div class={s.hideOnMobile} />
                  <div class={s.hideOnMobile} />
                  <div />
                </div>
                <div class={s.appImages}>
                  <img class={cx(s.appImage, s.appImage1)} src={require('../images/cases/kludd-phone-1.png')} alt='Kludd editor on a mobile phone with a document open.' />
                  <img class={cx(s.appImage, s.appImage2, s.hideOnMobile)} src={require('../images/cases/kludd-phone-2.png')} alt='Kludd editor on a mobile phone with settings open.' />
                </div>
              </div>
            </div>

            <SideBySideBlock
              modifier='kludd'
              blocks={[
                { text: { title: content.whoTitle, p: content.whoText } },
                { image: 'cases/kludd-who-2x.png' }
              ]}
            />

            <SideBySideBlock
              modifier='kludd-reverse'
              blocks={[
                { image: 'cases/kludd-collaborate-2x.png' },
                { text: { title: content.collaborateTitle, p: content.collaborateText } }
              ]}
            />

            <LargeImage
              src='cases/kludd-cafe-2x.png'
              alt='A person using kludd on a laptop in a cafe.'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.nonDistractionTitle}
              text={content.nonDistractionText}
              modifier='kludd-left-align'
              link={[content.visitTheSite, 'https://www.kludd.co/']}
              background='#FFFFFF'
              color='#070B13'
            />

            <div class={s.brandBlock}>
              <div class={s.inner}>
                <div class={s.images}>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-logo-pos.png')} alt='Kludd logotype.' />
                  </div>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-ui.png')} alt='Kludd design system' />
                  </div>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-icons.png')} alt='Kludd icons.' />
                  </div>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-notifications-2x.png')} alt='Kludd notifications.' />
                  </div>
                </div>

              </div>
            </div>

            <div class={s.darkModeBlock}>
              <div class={s.block}>
                <img src={require('../images/cases/kludd-text-crafted.svg')} alt='crafted' />
              </div>
              <div class={s.block}>
                <img src={require('../images/cases/kludd-text-for.svg')} alt='for' />
              </div>
              <div class={s.block}>
                <img src={require('../images/cases/kludd-text-every.svg')} alt='every' />
              </div>
              <div class={s.block}>
                <img src={require('../images/cases/kludd-text-occasion.svg')} alt='occasion' />
              </div>
            </div>

            <LargeImage
              inView='inViewBottom'
              src='cases/kludd-large-dark.png'
              mobileSrc='cases/kludd-large-dark-mobile.png'
              alt='Kludd with darkmode.'
              width='1200'
              background='#22282F'
              modifier='kludd'
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='kludd'
              similar={['mat-se', 'nordish-market', 'bandbond']}
            />
          </div>
        </div>
      </Base>
    )
  }
}
