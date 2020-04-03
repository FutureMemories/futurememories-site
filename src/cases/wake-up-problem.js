import { Component } from 'preact'
import inView from 'in-view'
import s from './wake-up-problem.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import ContactBlock from '../components/contact-block'
import MarkupCustomElement from '../components/markup-custom-element'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child`,
  `${s.inner} > div:nth-child(5) > div:first-child > div`
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
    const content = data.allCases.find(c => c.id === 'wake-up-problem')

    // console.log(content)

    return (
      <Base route='/cases/wake-up-problem' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            {/* <svg class={s.eyeSvg} viewBox='0 0 47 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M16.86 3.11768C15.0777 1.26386 12.5732 0.103149 9.79202 0.103149C4.38433 0.103149 0.000976562 4.46702 0.000976562 9.84996C0.000976562 12.222 0.853982 14.3945 2.26815 16.0835C4.29577 9.45679 9.91035 4.39114 16.86 3.11768Z' fill='black'/>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M44.2831 15.7478C45.5383 14.1086 46.2918 12.0691 46.2918 9.85029C46.2918 4.46736 41.9085 0.103485 36.5015 0.103485C33.7472 0.103485 31.263 1.23962 29.4844 3.06164C36.4609 4.21729 42.1379 9.18682 44.2831 15.7478Z' fill='black'/>
              <path class={s.lowerBody} fill-rule='evenodd' clip-rule='evenodd' d='M4.89258 28.433C6.81347 36.7076 14.2568 42.8791 23.1527 42.8791C32.0486 42.8791 39.4919 36.7076 41.4128 28.433H4.89258Z' fill='white' stroke='black' stroke-width='3.71692'/>
              <path class={s.pupil} fill-rule='evenodd' clip-rule='evenodd' d='M23.146 35.1891C19.5844 35.1891 16.6973 32.3148 16.6973 28.769C16.6973 25.2233 19.5844 27.4074 23.146 27.4074C26.7075 27.4074 29.5954 25.2233 29.5954 28.769C29.5954 32.3148 26.7075 35.1891 23.146 35.1891Z' fill='black'/>
              <path class={s.upperbody} fill-rule='evenodd' clip-rule='evenodd' d='M41.3206 28.8311C41.693 27.3639 41.8927 25.8281 41.8927 24.2453C41.8927 13.9384 33.4998 5.58287 23.1462 5.58287C12.7925 5.58287 4.40039 13.9384 4.40039 24.2453C4.40039 25.8281 4.5993 27.3639 4.97172 28.8311H41.3206Z' fill='#FEEA01' stroke='black' stroke-width='3.71692'/>
              <path d='M8.08105 45.5324C8.08105 45.5324 11.5991 40.1191 11.7864 40.2275' stroke='black' stroke-width='3.09744' stroke-linecap='round' stroke-linejoin='round'/>
              <path d='M36.9936 46.3363C36.9936 46.3363 33.5997 40.8449 33.7783 40.7235' stroke='black' stroke-width='3.09744' stroke-linecap='round' stroke-linejoin='round'/>
            </svg> */}

            <svg class={s.eyeSvg} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47 48'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M16.86 3.118A9.775 9.775 0 009.792.103C4.384.103.001 4.467.001 9.85c0 2.372.853 4.545 2.267 6.234C4.296 9.457 9.91 4.39 16.86 3.118zM44.283 15.748a9.665 9.665 0 002.009-5.898c0-5.383-4.384-9.746-9.79-9.746a9.776 9.776 0 00-7.018 2.958c6.977 1.155 12.654 6.125 14.8 12.686z' fill='#000'/>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M4.893 28.433c1.92 8.275 9.364 14.446 18.26 14.446s16.339-6.171 18.26-14.446H4.893z' fill='#fff'/>
              <path class={s.pupil} fill-rule='evenodd' clip-rule='evenodd' d='M23.146 35.19c-3.562 0-6.449-2.875-6.449-6.421 0-3.546 2.887-1.362 6.449-1.362 3.561 0 6.45-2.184 6.45 1.362 0 3.546-2.889 6.42-6.45 6.42z' fill='#000'/>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M41.32 28.831c.373-1.467.573-3.003.573-4.586 0-10.307-8.393-18.662-18.747-18.662S4.4 13.938 4.4 24.245c0 1.583.2 3.119.572 4.586H41.32z' fill='#FEEA01'/>
              <path class={s.eyelid} d='M4 29h38' stroke='#000' stroke-width='3.72'/>
              <path d='M8.081 45.532s3.518-5.413 3.705-5.304M36.994 46.336s-3.394-5.491-3.216-5.612' stroke='#000' stroke-width='3.097' stroke-linecap='round' stroke-linejoin='round'/>
              <ellipse cx='23.145' cy='24.23' rx='18.745' ry='18.65' stroke='#000' stroke-width='3.72'/>
            </svg>

            <CenterBlock
              className={s.alarminglyEffective}
              inView='inViewBottom'
              background='#FFFDE1'
              color='#737780'
              title={content.alarminglyEffectiveTitle}
              text={content.alarminglyEffectiveText}
              component={<MarkupCustomElement element='img' class={s.notificationImage} src={require('../images/cases/wake-up-problem-notification.png')} />}
              enableOrderChange
            />



            {/* <CenterBlock
              inView='inViewBottom'
              title={content.knowYourProductsTitle}
              text={content.knowYourProductsText}
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.exerciseTitle}
              src={{ path: 'cases/antistress-2.jpg', style: { maxHeight: '715px' } }}
              alt={content.exerciseAlt}
              color='#ffffff'
            /> */}

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='antistress'
              similar={['sleepcure', 'retts-plus', 'stc']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
