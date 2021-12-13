import { Component } from 'preact'
import inView from 'in-view'
import Base from '../_base'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextBlockMultiple from './components/text-block-multiple'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import SlideInBlock from './components/slide-in-block'
import DeviceBlock from './components/device-block'
import cx from 'classnames'
import s from './weekly-revolt.sass'

const inViewClasses = [
  'inViewBottom',
  'inViewRight',
  'inViewLeft'
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
    const content = data.allCases.find(c => c.id === 'weekly-revolt')
    this.questionsAndAnswers = content.questionsAndAnswers

    return (
      <Base route='/cases/weekly-revolt' data={data} root={root} dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
              dark
            />

            <LargeImage
              src='cases/weekly-revolt-1.jpg'
              alt='Weekly Revolt app mockup'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.aboutTitle}
              text={content.aboutText}
              link={[content.visitTheSite, 'https://www.weeklyrevolt.com/']}
            />

            <SlideInBlock
              inView='inViewRight'
              modifier='reverseOnMobile'
              className={s.designAndManer}
              title={content.designAndManerTitle}
              text={content.designAndManerText}
              image='cases/weekly-revolt-2.png'
              mobileImage='cases/weekly-revolt-5.png'
              alt='Weekly Revolt mockups'
              background='#FEF4F6'
              align='right'
            />

            <div class={s.iconsBlock}>
              <div class={s.inner}>
                <div class={s.iconsWrapper}>
                  <img class={cx(s.icons, 'inViewRight')} src={require('../images/cases/weekly-revolt-icons.svg')} />
                </div>
                <div class={s.brandImages}>
                  <img class='inViewLeft' src={require('../images/cases/weekly-revolt-3.png')} />
                </div>
              </div>
            </div>

            <TextBlockMultiple
              inView='inViewBottom'
              className={s.motivatingImprovements}
              content={content.motivatingImprovementsContent}
              centered
            />

            <CenterBlock
              className={s.companyGrowth}
              inView='inViewBottom'
              title={content.companyGrowthTitle}
              text={content.companyGrowthText}
              background='#FEF4F6'
            >
              <DeviceBlock
                customClass={s.deviceBlock}
                ios='https://apps.apple.com/se/app/weekly-revolt/id1540099800'
                android='https://play.google.com/store/apps/details?id=com.weeklyrevolt&hl=sv&gl=US'
                blackButtons
              />
            </CenterBlock>

            <LargeImage
              id='bandbond'
              className={s.video}
              src='cases/weekly-revolt-4.jpg'
              video='weekly-revolt.mp4'
              background='#131313'
              height='100'
            />

            <ContactBlock
              darkText
              content={data.content.contactBlock}
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
