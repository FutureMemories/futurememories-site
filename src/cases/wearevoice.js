import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextTwoCol from './components/text-two-col'
import ParallaxBumpBlock from './components/parallax-bump-block'
import BackgroundImageWithTextBlock from './components/backgroundimage-with-text-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'

import s from './wearevoice.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:first-child`,
  `${s.inner} > div:nth-child(5) > div > div`,
  `${s.inner} > div:nth-child(6) > div > div`,
  `${s.inner} > div:nth-child(7) > div > div`
].join(',.')

export default class extends Component {
  state = {}

  componentDidMount () {
    inView.offset(80)
    inView(`.${inViewClasses}`).on('enter', el => {
      el.classList.add('inView')
    })
  }

  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'we-are-voice')
    this.questionsAndAnswers = content.questionsAndAnswers

    return (
      <Base route='/cases/we-are-voice' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
              dark
            />

            <LargeImage
              src='cases/wearevoice-1.png'
              alt='Annotell.com mockup'
              className={s.backgroundImage}
              modifier='wearevoice'
              background='#1E2337'
            />

            <TextTwoCol
              title={content.aboutTitle}
              text={content.aboutText}
              link={{ url: 'https://wearevoice.se', label: content.visitTheSite, targetBlank: true }}
              titleColor='#EADFD8'
              textColor='rgba(234, 223, 216, 0.6)'
              inView='inViewBottom'
            />

            <ParallaxBumpBlock
              inView='inViewBottom'
              title={content.aboutAppTitle}
              text={content.aboutAppText}
              items={[
                { image: 'cases/wearevoice-device2.png', alt: content.imageAlt, speed: -10, startPos: -20, width: '345px', align: 'left' },
                { image: 'cases/wearevoice-device1.png', alt: content.imageAlt, speed: -15, startPos: -70, width: '345px', align: 'right' }
              ]}
              background='#1E2337'
              modifier='wearevoice'
              notMainHeader
            />

            <div class={s.imageAndTextSection}>
              <div class={s.content}>
                <div class={cx(s.column, s.mobileFadeBottom)}>
                  <img class={s.image} src={require('../images/cases/wearevoice-device3.png')} alt='' />
                </div>
                <div class={cx(s.column, 'inViewRight')}>
                  <h2 class={s.title}>{content.processTitle}</h2>
                  <p class={s.text}>{content.processText}</p>
                </div>
              </div>
            </div>

            <div class={s.designSection}>
              <div class={s.content}>
                <div class={cx(s.textBlock, 'inViewBottom')}>
                  <h2 class={s.title}>{content.aboutDesignTitle}</h2>
                  <p class={s.text}>{content.aboutDesignText}</p>
                </div>
                <div class={cx(s.imageBlock, 'inViewRight')}>
                  <img class={s.image} src={require('../images/cases/wearevoice-design-1.png')} alt='' />
                </div>
                <div class={cx(s.imageBlock, 'inViewBottom')}>
                  <img class={s.image} src={require('../images/cases/wearevoice-design-2.png')} alt='' />
                  <img class={s.image} src={require('../images/cases/wearevoice-design-3.png')} alt='' />
                </div>
                <div class={cx(s.imageBlock, 'inViewLeft')}>
                  <img class={s.image} src={require('../images/cases/wearevoice-design-4.png')} alt='' />
                </div>
              </div>
            </div>

            <BackgroundImageWithTextBlock
              inView='inViewBottom'
              src={{ path: 'cases/wearevoice-bg-1.jpg' }}
              color='#EADFD8'
              title={content.resultTitle}
              text={content.resultText}
              link={[content.visitTheSite, 'https://www.wearevoice.se']}
            />

            <ContactBlock
              content={data.content.contactBlock}
              darkText
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='we-are-voice'
              similar={['mat-se', 'stc', 'bauer-university']}
              color='#070B13'
            />
          </div>
        </div>
      </Base>
    )
  }
}
