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
import MarkupCustomElement from '../components/markup-custom-element'
import ContactBlock from '../components/contact-block'

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

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'bauer-university')

    return (
      <Base route='/cases/bauer-university' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
            />

            <LargeImage src='cases/bauer-university-1.jpg' alt={content.tabletMockup} />

            <CenterBlock
              inView='inViewBottom'
              title={content.knowYourProductsTitle}
              text={content.knowYourProductsText}
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/bauer-university-2.png', alt: 'Bauer University (Sales Training) tablet mockup' },
                { inView: 'inViewRight', title: content.fromRookieTitle, desc: content.fromRookieText },
                { inView: 'inViewRight', image: 'cases/bauer-university-3.png', alt: 'Bauer University (Product Category) tablet mockup' },
                { inView: 'inViewLeft', image: 'cases/bauer-university-4.png', alt: 'Bauer University (Product Training) tablet mockup' }
              ]}
              background='#151D20'
              color='#ffffff'
            />

            <ThreeBlock
              inView='inViewBottom'
              background='#F9F9FA'
              blocks={[
                { type: 'image', image: 'cases/bauer-university-5.png', modifier: 'matSeIpad' },
                { type: 'text', title: content.uxTitle, text: content.uxText }
              ]}
            />

            <BookmarkBlock
              className={s.globalSection}
              title={content.elearningTitle}
              text={content.elearningText}
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
              title={content.engagementTitle}
              text={content.engagementText}
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
              component={<MarkupCustomElement element='p' markup={content.futurememories} trim={false} />}
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
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
