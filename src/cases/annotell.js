import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import s from './annotell.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'

import BookmarkBlock from './components/bookmark-block'

import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import MarkupCustomElement from '../components/markup-custom-element'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  // `${s.inner} > div:nth-child(4) > div:first-child`,
  // `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
  `${s.inner} > div:nth-child(5) > div:nth-child(2)`,
  `${s.inner} > div:nth-child(7) > div:nth-child(2)`, //two text cols
  `${s.inner} > div:nth-child(8) > div:first-child > div`,
  `${s.inner} > div:nth-child(10) > div:first-child > div`
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

  render ({ data, root }, { currentQuestion, currentAnswerCorrect, selectedAnswer, showResultView }) {
    const content = data.allCases.find(c => c.id === 'annotell')
    this.questionsAndAnswers = content.questionsAndAnswers

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
                <img class={s.image} src={require('../images/cases/annotell-laptop-left.png')} alt="" />
                <img class={s.image} src={require('../images/cases/annotell-laptop-right.png')} alt="" />
              </div>
              <div class={cx(s.images, s.mobileImages)}>
                <img class={s.image} src={require('../images/cases/annotell-laptop-left-mobile.png')} alt="" />
                <img class={s.image} src={require('../images/cases/annotell-laptop-right-mobile.png')} alt="" />
              </div>
            </div>

            <div class={s.intuitiveDesignSection}>
              <div class={s.textContent}>
                <h1>{content.innovativeDesignTitle}</h1>
              </div>
              <div class={cx(s.images, s.desktopImages)}>
                <img class={s.image} src={require('../images/cases/annotell-screenshot-left.png')} alt="" />
                <img class={s.image} src={require('../images/cases/annotell-screenshot-right.png')} alt="" />
              </div>
              <div class={cx(s.images, s.mobileImages)}>
                <img class={s.image} src={require('../images/cases/annotell-screenshot-left-mobile.png')} alt="" />
                <img class={s.image} src={require('../images/cases/annotell-screenshot-right-mobile.png')} alt="" />
              </div>
            </div>

            <div class={s.twoTextCols}>
              <div class={s.column}>
                <h2 class={s.title}>{content.designTitle}</h2>
                <p class={s.text}>{content.designText}</p>
              </div>
              <div class={s.column}>
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
                  <img src={require('../images/cases/annotell-logo-black.svg')} alt="" />
                </div>
                <div class={s.logoBlock}>
                  <img src={require('../images/cases/annotell-logo-white.svg')} alt="" />
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
            />

            {/*
            <CenterBlock
              className={s.snoozeLose}
              inView='inViewBottom'
              background='#FFFDE1'
              color='#737780'
              title={content.snoozeLoseTitle}
              text={content.snoozeLoseText}
              component={<MarkupCustomElement element='img' class={s.notificationImage} src={require('../images/cases/wake-up-problem-notification.png')} />}
              enableOrderChange
            />

            <BookmarkBlock
              className={s.alarminglyEffective}
              title={content.alarminglyEffectiveTitle}
              text={content.alarminglyEffectiveText}
              inView='inViewLeft'
              image='cases/wake-up-problem-phone.png'
              background='#FFEB00'
              color='black'
              modifier='wakeUpProblemPhone'
            />

            <BookmarkBlock
              className={s.challengeSection}
              title={content.upForAChallengeTitle}
              text={content.upForAChallengeText}
              inView='inViewRight'
              background='#FFFDE1'
              color='#737780'
              align='left'

            >
              <p>hej</p>
            </BookmarkBlock>

            <div class={s.eyeSection}>
              <svg class={s.eyeSvg} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47 48'>
                <path fill-rule='evenodd' clip-rule='evenodd' d='M16.86 3.118A9.775 9.775 0 009.792.103C4.384.103.001 4.467.001 9.85c0 2.372.853 4.545 2.267 6.234C4.296 9.457 9.91 4.39 16.86 3.118zM44.283 15.748a9.665 9.665 0 002.009-5.898c0-5.383-4.384-9.746-9.79-9.746a9.776 9.776 0 00-7.018 2.958c6.977 1.155 12.654 6.125 14.8 12.686z' fill='#000' />
                <path fill-rule='evenodd' clip-rule='evenodd' d='M4.893 28.433c1.92 8.275 9.364 14.446 18.26 14.446s16.339-6.171 18.26-14.446H4.893z' fill='#fff' />
                <path class={s.pupil} fill-rule='evenodd' clip-rule='evenodd' d='M23.146 35.19c-3.562 0-6.449-2.875-6.449-6.421 0-3.546 2.887-1.362 6.449-1.362 3.561 0 6.45-2.184 6.45 1.362 0 3.546-2.889 6.42-6.45 6.42z' fill='#000' />
                <path fill-rule='evenodd' clip-rule='evenodd' d='M41.32 28.831c.373-1.467.573-3.003.573-4.586 0-10.307-8.393-18.662-18.747-18.662S4.4 13.938 4.4 24.245c0 1.583.2 3.119.572 4.586H41.32z' fill='#FEEA01' />
                <path class={s.eyelid} d='M4 29h38' stroke='#000' stroke-width='3.72' />
                <path d='M8.081 45.532s3.518-5.413 3.705-5.304M36.994 46.336s-3.394-5.491-3.216-5.612' stroke='#000' stroke-width='3.097' stroke-linecap='round' stroke-linejoin='round' />
                <ellipse cx='23.145' cy='24.23' rx='18.745' ry='18.65' stroke='#000' stroke-width='3.72' />
              </svg>
            </div>
          */}
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
