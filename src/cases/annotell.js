import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './annotell.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  // `${s.inner} > div:nth-child(4) > div:first-child`,
  // `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
  `${s.inner} > div:nth-child(5) > div:nth-child(2)`,
  `${s.inner} > div:nth-child(6) > div:first-child`,
  `${s.inner} > div:nth-child(7) > div`,
  `${s.inner} > div:nth-child(8) > div:first-child > div`,
  `${s.inner} > div:nth-child(10) > div:first-child > div`,
  `${s.inner} > div:nth-child(11) > div`
].join(',.')

export default class extends Component {
  state = {

  }

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
    const content = data.allCases.find(c => c.id === 'annotell')

    return (
      <Base route='/cases/annotell' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              src='cases/annotell-bg-1.png' alt='Annotell.com mockup' className={s.backgroundImage} modifier='annotell'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              link={[content.visitTheSite, 'https://www.annotell.com/']}
              background='#FFFFFF'
              color='#070B13'
            />

            <div class={s.carSensorSection}>
              <img src={require('../images/cases/annotell-animated-car-sensor.svg')} alt='' />
            </div>

            <div class={s.digitalFirstSection}>
              <div class={cx(s.textContent, 'inViewLeft')}>
                <h1>{content.digitalFirstTitle}</h1>
                <p>{content.digitalFirstText}</p>
              </div>
              <div class={cx(cx(s.images, s.desktopImages, 'inViewBottom'))}>
                <img class={s.image} src={require('../images/cases/annotell-laptop-left.png')} alt='' />
                <img class={s.image} src={require('../images/cases/annotell-laptop-right.png')} alt='' />
              </div>
              <div class={cx(s.images, s.mobileImages)}>
                <img class={s.image} src={require('../images/cases/annotell-laptop-left-mobile.png')} alt='' />
                <img class={s.image} src={require('../images/cases/annotell-laptop-right-mobile.png')} alt='' />
              </div>
            </div>

            <div class={s.intuitiveDesignSection}>
              <div class={cx(s.textContent, 'inViewLeft')}>
                <h1>{content.innovativeDesignTitle}</h1>
              </div>
              <div class={cx(s.images, s.desktopImages)}>
                <img class={s.image} src={require('../images/cases/annotell-screenshot-left.png')} alt='' />
                <img class={s.image} src={require('../images/cases/annotell-screenshot-right.png')} alt='' />
              </div>
              <div class={cx(s.images, s.mobileImages)}>
                <img class={s.image} src={require('../images/cases/annotell-screenshot-left-mobile.png')} alt='' />
                <img class={s.image} src={require('../images/cases/annotell-screenshot-right-mobile.png')} alt='' />
              </div>
            </div>

            <div class={s.twoTextCols}>
              <div class={cx(s.column, 'inViewBottom')}>
                <h2 class={s.title}>{content.designTitle}</h2>
                <p class={s.text}>{content.designText}</p>
              </div>
              <div class={cx(s.column, 'inViewBottom')}>
                <h2 class={s.title}>{content.techTitle}</h2>
                <p class={s.text}>{content.techText}</p>
              </div>
            </div>

            <CenterBlock
              className={s.digitalIdentity}
              inView='inViewBottom'
              src={{ path: 'cases/annotell-bg-2.png', style: { maxHeight: '999px' } }}
              color='#FFFFFF'
              title={content.identityTitle}
              text={content.identityText}
            />

            <div class={s.brandBlocks}>
              <div class={s.brandBlock}>
                <div class={s.logoBlock}>
                  <img src={require('../images/cases/annotell-logo-black.svg')} alt='' />
                </div>
                <div class={s.logoBlock}>
                  <img src={require('../images/cases/annotell-logo-white.svg')} alt='' />
                </div>
              </div>
              <div class={cx(s.brandBlock, s.typographyBlock)}>
                <div class={s.typographyContent}>
                  <p class={s.label}>Brand colors</p>
                  <img class={cx(s.brandImage, s.colors)} src={require('../images/cases/annotell-brand-colors.png')} alt='Annotell brand colors' />
                </div>
                <div class={s.typographyContent}>
                  <p class={s.label}>Typography</p>
                  <img class={cx(s.brandImage)} src={require('../images/cases/annotell-brand-font.png')} alt='Annotell brand font' />
                </div>
                <div class={s.typographyContent}>
                  <p class={s.label}>Icons</p>
                  <img class={cx(s.brandImage, s.iconsMobile)} src={require('../images/cases/annotell-brand-icons-mobile.png')} alt='Annotell brand icons' />
                  <img class={cx(s.brandImage, s.iconsDesktop)} src={require('../images/cases/annotell-brand-icons.png')} alt='Annotell brand icons' />
                </div>
              </div>
            </div>

            <CenterBlock
              inView='inViewBottom'
              title={content.integrationTitle}
              text={content.integrationText}
              background='#FFFFFF'
              color='#070B13'
            />

            <div class={s.centeredLaptops}>
              <div class={s.imgWrapper}>
                <img class={s.laptop} src={require('../images/cases/annotell-front-laptop-left.png')} alt='' />
                <img class={s.laptop} src={require('../images/cases/annotell-front-laptop-center.png')} alt='' />
                <img class={s.laptop} src={require('../images/cases/annotell-front-laptop-right.png')} alt='' />
              </div>
            </div>

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
