import cx from 'classnames'
import { Component } from 'preact'
import ContactBlock from '../components/contact-block'
import Base from '../_base'
import s from './bauer-university.sass'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ParallaxBumpBlock from './components/parallax-bump-block'
import ProjectsBlock from './components/projects-block'
import TextBlock from './components/text-block'
import SideBySideBlock from './components/side-by-side-block'
import BookmarkBlock from './components/bookmark-block'

const emptySpace = '#141415'
const cloudySky = '#F1F5F7'
const textDark = '#070B13'

// const inViewClasses = [
//   `${s.inner} > div:nth-child(3) > div:first-child > div`,
//   `${s.inner} > div:nth-child(4) > div:last-child > div`,
//   `${s.inner} > div:nth-child(5) > div:first-child`,
//   `${s.statsSection} > div:first-child > div`,
//   `${s.globalSection} > div:first-child > div`,
//   `${s.device}`,
//   `${s.progressBar}`,
//   `${s.inner} > div:nth-child(8) > div:first-child > div`
// ].join(',.')

// const ProgressBar = ({ badge, percent, color }) => (
//   <div class={s.progressBar}>
//     <img src={require(`../images/cases/bauer-university-badge-${badge}.svg`)} />
//     <span class={s.progress} style={`--progressWidth: ${(percent / 70) * 100}%; --progressColor: ${color};`}>{percent}%</span>
//   </div>
// )

export default class extends Component {
  // componentDidMount () {
  //   inView.offset(200)
  //   inView(`.${inViewClasses}`).on('enter', el => {
  //     el.classList.add('inView')
  //   })
  // }

  // componentWillUnmount () {
  //   inView(`.${inViewClasses}`).off('enter')
  // }

  render ({ data, root }) {
    const content = data.allCases.find(c => c.id === 'bauer-university')

    return (
      <Base route='/cases/bauer-university' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>
            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
              type={content.type}
              dark
            />

            <LargeImage
              src='cases/bauer-university-hero.png'
              alt={content.tabletMockup}
            />

            <TextBlock
              title={content.knowYourProductsTitle}
              text={content.knowYourProductsText}
              background={emptySpace}
              color='#FFF'
            />

            <section class={cx(s.designSection)}>
              <div class={cx(s.imageGrid)}>
                <div>
                  <img class={s.image} src={require('../images/cases/bauer-university-components-1.png')} loading='lazy' alt='' />
                </div>
                <div>
                  <img class={s.image} src={require('../images/cases/bauer-university-icons.png')} loading='lazy' alt='' />
                </div>
              </div>
              <div class={cx(s.imageHideOnMobile)}>
                <img class={s.image} src={require('../images/cases/bauer-university-components-2.png')} loading='lazy' alt='' />
              </div>
            </section>

            <ParallaxBumpBlock
              title={content.fromRookieTitle}
              text={content.fromRookieText}
              items={[
                { image: 'cases/bauer-university-mobile-1.png', alt: content.imageAlt, speed: -10, startPos: 15, width: '391px', align: 'left' },
                { image: 'cases/bauer-university-mobile-2.png', alt: content.imageAlt, speed: -20, startPos: -15, width: '391px', align: 'right' }
              ]}
              background={cloudySky}
              color={textDark}
            />

            <SideBySideBlock
              blocks={[
                { text: { title: content.uxTitle, p: content.uxText } },
                { image: 'cases/bauer-university-tablet-1.png', align: 'right' }
              ]}
              background={emptySpace}
              modifier='bauer-university'
            />

            <SideBySideBlock
              blocks={[
                { image: 'cases/bauer-university-tablet-2.png', align: 'left' },
                { text: { title: content.elearningTitle, p: content.elearningText } }
              ]}
              background={emptySpace}
              modifier='bauer-university'
            />

            <BookmarkBlock
              className={s.statsSection}
              title={content.engagementTitle}
              text={content.engagementText}
              // inView='inViewRight'
              background='radial-gradient(83.04% 114.99% at 35.45% -17.26%, rgb(252 236 178) 0%, rgba(255, 255, 255, 1) 100%);'
              align='left'
              color={textDark}
            >
              <div class={s.badges}>
                <img class={s.image} src={require('../images/cases/bauer-university-A.png')} loading='lazy' alt='badge' />
                <img class={s.image} src={require('../images/cases/bauer-university-R.png')} loading='lazy' alt='badge' />
                <img class={s.image} src={require('../images/cases/bauer-university-P.png')} loading='lazy' alt='badge' />
              </div>
            </BookmarkBlock>

            <ContactBlock
              content={data.content.contactBlock}
              darkText
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='bauer-university'
              similar={['mat-se', 'nordish-market', 'bandbond']}
              background='#FFF'
              color={textDark}
            />
          </div>
        </div>
      </Base>
    )
  }
}
