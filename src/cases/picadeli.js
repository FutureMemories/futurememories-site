import { Component } from 'preact'
import cx from 'classnames'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import CenterBlock from './components/center-block'
import BookmarkBlock from './components/bookmark-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import s from './picadeli.sass'
import LargeImage from './components/large-image'
import TextTwoCol from './components/text-two-col'

const inViewClasses = [
  'inner > div:nth-child(2) > div > div',
  'inner > div:nth-child(3) > div > div',
  'inner > div:nth-child(4) > div > div',
  'inner > div:nth-child(5) > div',
  'inner > div:nth-child(6) > img',
  'inner > div:nth-child(7) > div > div'
].join(',.')

export default class extends Component {
  state = {}

  componentDidMount () {
    inView.offset(100) // Lowered since not all elements loaded correctly.
    inView(`.${inViewClasses}`).on('enter', el => {
      el.classList.add('inView')
    })
  }

  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'picadeli')

    const expressTitleArray = content.expressOrderTitle.split('\b')
    return (
      <Base route='/cases/picadeli' dark data={data} root={root}>
        <div class={s.view}>
          <div class='inner'>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              src='cases/picadeli-app-hero.png' alt='Picadeli app'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={<span className={s.gray}>{content.aboutText}</span>}
              // link={[content.visitTheSite, 'https://www.eyescanner.se/']}
              background='#FFFFFF'
              color='rgb(22, 29, 43)'
              modifier='picadeli'
            />

            <BookmarkBlock
              className={s.alarminglyEffective}
              title={expressTitleArray.map((element, key) => <span key={key} className={key === 1 && s.strike}>{element}</span>)}
              text={<span className={s.gray}>{content.expressOrderText}</span>}
              inView='inViewLeft'
              image='cases/picadeli-desktop.png'
              background='#F4FAF8'
              align='left'
              color='black'
              modifier='picadeli'
            />

            <TextTwoCol
              title={content.djungleTitle}
              text={<span className={s.gray}>{content.djungleText}</span>}
              inView='inViewRight'
              modifier='picadeli'
            />

            <div className={s.uiSection}>
              <img className={cx(s.image, s.fullWidth, 'inViewLeft')} src={require('../images/cases/picadeli-design-1.png')} />
              <img className={cx(s.image, 'inViewBottom')} src={require('../images/cases/picadeli-design-2.png')} />
              <img className={cx(s.image, 'inViewBottom')} src={require('../images/cases/picadeli-design-3.png')} />
              <img className={cx(s.image, s.fullWidth, 'inViewRight')} src={require('../images/cases/picadeli-design-4.png')} />
            </div>

            <div class={s.posSection}>
              <div class={s.content}>
                <div class={cx(s.textBlock, 'inViewBottom')}>
                  <h2 class={s.title}>{content.pointsOfSaleTitle}</h2>
                  <p class={s.text}>{content.pointsOfSaleText}</p>
                </div>
                <div class={cx(s.imageBlock, 'inViewRight')}>
                  <img class={s.image} src={require('../images/cases/picadeli-app-pos.png')} alt='' />
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
