import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import TextTwoCol from './components/text-two-col'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './kludd.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(2) > img`,
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div > div`,
  `${s.inner} > div:nth-child(6) > div`,
  `${s.inner} > div:nth-child(8)`,
  `${s.inner} > div:nth-child(9) > img`
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
              alt=''
              width='1200'
              background='#F8F8F9'
              modifier='kludd'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              link={[content.visitTheSite, 'https://www.annotell.com/']}
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
                  <img class={cx(s.appImage, s.appImage1)} src={require('../images/cases/kludd-phone-1.png')} alt='' />
                  <img class={cx(s.appImage, s.appImage2, s.hideOnMobile)} src={require('../images/cases/kludd-phone-2.png')} alt='' />
                </div>
              </div>
            </div>

            <TextTwoCol
              title={content.whyTitle}
              text={content.whyText}
              titleColor='#161D2B'
              textColor='#161D2B'
              // inView='inViewBottom'
            />

            <div class={s.desktopAppBlock}>
              <div class={cx(s.appImages)}>
                <img class={s.appImage} src={require('../images/cases/kludd-desktop-1.png')} alt='' />
                <img class={s.appImage} src={require('../images/cases/kludd-desktop-2.png')} alt='' />
                <img class={s.appImage} src={require('../images/cases/kludd-desktop-2.png')} alt='' />
              </div>
              <div class={s.appImages}>
                <img class={s.appImage} src={require('../images/cases/kludd-desktop-4.png')} alt='' />
                <img class={s.appImage} src={require('../images/cases/kludd-desktop-5.png')} alt='' />
              </div>
            </div>

            <div class={s.brandBlock}>
              <div class={s.inner}>
                <div class={s.textWrapper}>
                  <h2>{content.brandTitle}</h2>
                  <p>{content.brandText}</p>
                </div>
                <div class={s.images}>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-logo-pos.png')} alt='' />
                  </div>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-ui.png')} alt='' />
                  </div>
                  <div class={s.imageWrapper}>
                    <img src={require('../images/cases/kludd-icons.png')} alt='' />
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
              src='cases/kludd-large-dark.png'
              mobileSrc='cases/kludd-large-dark-mobile.png'
              alt=''
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
              current='annotell'
              similar={['mat-se', 'nordish-market', 'bandbond']}
            />
          </div>
        </div>
      </Base>
    )
  }
}
