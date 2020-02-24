import { Component } from 'preact'
import inView from 'in-view'
import s from './bandbond.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import BookmarkBlock from './components/bookmark-block'
import TextBlock from './components/text-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import MarkupCustomElement from '../components/markup-custom-element'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child > div`,
  `${s.inner} > div:nth-child(6) > div:first-child > div`
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
    const content = data.allCases.find(c => c.id === 'bandbond')

    return (
      <Base route='/cases/bandbond' background='#131313' data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
            />

            <LargeImage
              id='bandbond'
              src='cases/bandbond-video.jpg'
              video='bandbond.mp4'
              background='#131313'
            />

            <TextBlock
              color='white'
              background='#171717'
              inView='inViewBottom'
              title={content.heavyTitle}
              text={content.heavyText}
              link={[data.content.visitTheSite, 'https://bandbond.com/']}
            />

            <BookmarkBlock
              title={content.reenterTitle}
              text={content.reenterText}
              inView='inViewLeft'
              image='cases/bandbond-1.png'
              background='#131313'
              color='white'
              modifier='bandbondPhone'
            />

            <BookmarkBlock
              title={content.trebleTitle}
              text={content.trebleText}
              inView='inViewRight'
              image='cases/bandbond-3.png'
              color='white'
              align='left'
              modifier='bandbondPhoneBg'
            />

            <CenterBlock
              className={s.aboutSection}
              inView='inViewBottom'
              background='#171717'
              color='#858585'
              component={<MarkupCustomElement element='p' markup={content.futurememories} trim={false} />}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='bandbond'
              similar={['proflight', 'tennis-watch', 'bauer-university']}
              background='#131313'
            />

          </div>
        </div>
      </Base>
    )
  }
}
