import { Component } from 'preact'
import inView from 'in-view'
import s from './bauer-university.sass'
import Base from '../_base'
import BookmarkBlock from './components/bookmark-block'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextGridBlock from './components/text-grid-block'
import ThreeBlock from './components/three-block'
import CenterBlock from './components/center-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:last-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
  `${s.statsSection} > div:first-child > div`,
  `${s.globalSection} > div:first-child > div`,
  `${s.device}`,
  `${s.progressBar}`,
  `${s.inner} > div:nth-child(8) > div:first-child > div`
].join(',.')

const ProgressBar = ({ badge, percent, color }) => (
  <div class={s.progressBar}>
    <img src={require(`../images/cases/bauer-university-badge-${badge}.svg`)} />
    <span class={s.progress} style={`--progressWidth: ${(percent / 70) * 100}%; --progressColor: ${color};`}>{percent}%</span>
  </div>
)

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

  render () {
    return (
      <Base route='/cases/bauer-university' dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='BAUER UNIVERSITY'
              subtitle='Better knowledge, better sales'
            />

            <LargeImage src='cases/bauer-university-1.jpg' alt='Bauer tablet mockup' />

            <CenterBlock
              inView='inViewBottom'
              title='Know your products'
              text='Bauer University is a global e-learning platform for Bauer retailers. The service educates sales personnel in Bauer’s product range and provides the best experience in guiding customers to buy the right hockey gear for their specific needs. The result became a gamification-based online training platform turning retailers into Bauer hockey gear sales experts, worldwide.'
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/bauer-university-2.png', alt: 'Bauer University (Sales Training) tablet mockup' },
                { inView: 'inViewRight', title: 'From Rookie to Pro: bringing sales to the top level', desc: 'Bauer University helps retailers to become more knowledgeable through product trainings for Bauer equipment and real-world sales scenarios. Motivation is kept up by well thought-out gamification concepts. Contestants can pass five skill levels; from Rookie to Pro. To maintain their current level, contestants have to stay current on latest products and sales strategies, enabling continuous learning.  Achievements result in both physical and digital rewards. All wrapped up in an extremely polished web-based experience.' },
                { inView: 'inViewRight', image: 'cases/bauer-university-3.png', alt: 'Bauer University (Product Category) tablet mockup' }, { inView: 'inViewLeft', image: 'cases/bauer-university-4.png', alt: 'Bauer University (Product Training) tablet mockup' }
              ]}
              background='#151D20'
              color='#ffffff'
            />

            <ThreeBlock
              inView='inViewBottom'
              background='#F9F9FA'
              blocks={[
                { type: 'image', image: 'cases/bauer-university-5.png', modifier: 'matSeIpad' },
                { type: 'text', title: 'UX design, game design and development made the dream team', text: 'Bringing our UX experts, and developers together to form this product turned into a great success. We developed a game-like achievement system with experience points and ranks and built everything from the ground up. The game engine is developed in Python, using well-established Open Source frameworks. The user interface is a React-based web application, making Bauer University accessible to almost any device. Communication between frontend and game engine happens through our own GraphQL interface.' }
              ]}
            />

            <BookmarkBlock
              className={s.globalSection}
              title='A global e-learning initiative bringing return on investment'
              text={[
                'Bauer University was made available for Bauer personnel in 32 markets. All content, including video material and quiz questions, are today offered in seven languages.'
              ]}
              inView='inViewLeft'
              background='#EFEFEF'
            >
              <div class={s.device}>
                <img class={s.deviceImage} src={require('../images/cases/bauer-university-6.png')} />
                <div class={s.backFlags}>
                  <img class={s.germany} src={require('../images/icons/flag-germany.svg')} />
                </div>
                <div class={s.frontFlags}>
                  <img class={s.czechRepublic} src={require('../images/icons/flag-czech-republic.svg')} />
                  <img class={s.sweden} src={require('../images/icons/flag-sweden.svg')} />
                  <img class={s.canada} src={require('../images/icons/flag-canada.svg')} />
                  <img class={s.unitedStates} src={require('../images/icons/flag-united-states.svg')} />
                  <img class={s.finland} src={require('../images/icons/flag-finland.svg')} />
                  <img class={s.russia} src={require('../images/icons/flag-russia.svg')} />
                </div>
              </div>
            </BookmarkBlock>

            <BookmarkBlock
              className={s.statsSection}
              title='Extraordinary engagement'
              text={[
                'Bauer University got an enourmous reception amongst sales personnel globally.',
                'Within the first 6-month period from product launch, more than 4000 users signed up. The platform was adopted immediately and salespeople advanced rapidly from Rookie to Pro spending hours with training material we created. The platform\'s average session duration is astonishing with more than 16 minutes.',
                'Gamification concepts are playing well. Users are eager to maintain their achievements and eagerly follow up with new training material released twice a year. This results in more than 70% of users advancing in level being on Pro-level, the highest level within Bauer University. This corresponds in answering 650+ product-related questions correctly and to watch over 3 hours of video tutorials.'
              ]}
              inView='inViewRight'
              background='white'
              align='left'
            >
              <div class={s.badges}>
                <ProgressBar badge='pro' percent={70} color='#E2B74D' />
                <ProgressBar badge='elite' percent={8} color='#AEAEAE' />
                <ProgressBar badge='performance' percent={10} color='#D39962' />
                <ProgressBar badge='competitive' percent={12} color='#009CDA' />
              </div>
            </BookmarkBlock>

            <CenterBlock
              inView='inViewBottom'
              background='#F5F5F5'
              component={<p>{'Bauer University is the result of combining forces with our\ncreative friends over at '}<a href='https://thebond.se/' target='_blank' rel='noopener noreferrer'>The Bond Communication</a>. {'🖤'}</p>}
            />

            <ProjectsBlock
              current='bauer-university'
              similar={['stc', 'mat-se', 'retts-plus']}
              background='#ffffff'
            />

          </div>
        </div>
      </Base>
    )
  }
}
