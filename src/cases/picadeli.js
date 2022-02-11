import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
// import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import BookmarkBlock from './components/bookmark-block'

// import TextTwoCol from './components/text-two-col'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './picadeli.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(2) > div > div`,
  `${s.inner} > div:nth-child(3) > div > div`,
  `${s.inner} > div:nth-child(5) > div > div`
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
    const content = data.allCases.find(c => c.id === 'picadeli')

    return (
      <Base route='/cases/picadeli' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <div class={s.appImagesBlock}>
              <div class={s.inner}>
                <div class={s.appImages}>
                  <img class={cx(s.appImage, s.appImage1)} src={require('../images/cases/picadeli-app-1.png')} alt={content.altImageApp1} />
                  <img class={cx(s.appImage, s.appImage2)} src={require('../images/cases/picadeli-app-2.png')} alt={content.altImageApp2} />
                  <img class={cx(s.appImage, s.appImage3)} src={require('../images/cases/picadeli-app-3.png')} alt={content.altImageApp3} />
                  <img class={cx(s.appImage, s.appImage4)} src={require('../images/cases/picadeli-app-4.png')} alt={content.altImageApp4} />
                  <img class={cx(s.appImage, s.appImage5)} src={require('../images/cases/picadeli-app-5.png')} alt={content.altImageApp5} />
                </div>
              </div>
            </div>

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              // link={[content.visitTheSite, 'https://www.eyescanner.se/']}
              background='#FFFFFF'
            />

            <BookmarkBlock
              className={s.alarminglyEffective}
              title={content.expressOrderTitle}
              text={content.expressOrderText}
              // inView='inViewLeft'
              image='cases/picadeli-desktop.png'
              background='#F4FAF8'
              align='left'
              color='black'
              modifier='picadeli'
            />

            <div class={s.designSection}>
              <div class={s.content}>
                <div class={cx(s.textBlock, 'inViewBottom')}>
                  <h2 class={s.title}>{content.aboutDesignTitle}</h2>
                  <p class={s.text}>{content.aboutDesignText}</p>
                </div>
                <div class={cx(s.imageBlock, 'inViewRight')}>
                  <img class={s.image} src={require('../images/cases/picadeli-design-1.png')} alt='' />
                </div>
                <div class={cx(s.imageBlock, 'inViewBottom')}>
                  <img class={s.image} src={require('../images/cases/picadeli-design-2.png')} alt='' />
                  <img class={s.image} src={require('../images/cases/picadeli-design-3.png')} alt='' />
                </div>
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
