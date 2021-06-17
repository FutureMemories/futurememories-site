import { Component } from 'preact'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import SideBySideBlock from './components/side-by-side-block'
import cx from 'classnames'
import s from './barseback.sass'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > .inViewBottom`
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
    const content = data.allCases.find(c => c.id === 'barseback')
    this.questionsAndAnswers = content.questionsAndAnswers

    return (
      <Base route='/cases/barseback' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              customClass={s.hero}
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage src='cases/barseback-1.jpg' alt='' />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              // link={[content.visitTheSite, 'http://www.barsebackresort.se/', s.ctaButton]}
              background='#1A201C'
              color='inherit'
            />

            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-2.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-3.jpg')} />

            <SideBySideBlock
              background='#1F2722'
              blocks={[
                { image: 'cases/barseback-4.jpg' },
                { image: 'cases/barseback-5.jpg' }
              ]}
            />

            <LargeImage
              src='cases/barseback-6.jpg' alt='' className={s.image}
            >
              <h1 class={s.textAboveImage}>{content.colorPalettText}</h1>
            </LargeImage>

            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-7.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-8.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-9.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-10.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-11.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-12.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-13.jpg')} />
            <img class={cx(s.image, 'inViewBottom')} src={require('../images/cases/barseback-14.jpg')} />
          </div>

          <ContactBlock dark background='inherit' content={data.content.contactBlock} />

          <ProjectsBlock
            dark
            {...data.projectsBlock}
            allCases={data.allCases}
            defaultOtherCases={data.defaultOtherCases}
            current='barseback'
            similar={['mat-se', 'nordish-market', 'bandbond']}
            background='#151B17'
          />
        </div>
      </Base>
    )
  }
}
