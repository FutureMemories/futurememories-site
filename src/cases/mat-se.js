import { Component } from 'preact'
import inView from 'in-view'
import s from './mat-se.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import SlideInBlock from './components/slide-in-block'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import BookmarkBlock from './components/bookmark-block'
import ThreeBlock from './components/three-block'
import ContactBlock from '../components/contact-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
  `${s.inner} > div:nth-child(6) > div:first-child > div`,
  `${s.inner} > div:nth-child(7) > div:first-child > div`
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
    const content = data.allCases.find(c => c.id === 'mat-se')

    return (
      <Base route='/cases/mat-se' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
            />

            <LargeImage src='cases/mat-se-1.jpg' alt='Mat.se mockup' />

            <CenterBlock
              inView='inViewBottom'
              title={content.shopOnlineTitle}
              text={content.shopOnlineText}
              src={{ path: 'cases/mat-se-2.png', align: 'left' }}
              alt='Mat.se truck'
            />

            <SlideInBlock
              inView='inViewRight'
              title={content.fastMovingTitle}
              text={content.fastMovingText}
              image={{ path: 'cases/mat-se-5.svg', width: 824, height: 262, positon: 'inside' }}
              alt='Mat.se storage illustration'
              align='right'
              modifier='flexEnd'
            />

            <ThreeBlock
              inView='inViewBottom'
              blocks={[
                { type: 'image', image: 'cases/mat-se-6.png', modifier: 'matSeIpad' },
                { type: 'text', title: content.fillingTitle, text: content.fillingText, items: content.fillingItems }
              ]}
            />

            <BookmarkBlock
              inView='inViewLeft'
              title={content.deliveredTitle}
              text={content.deliveredText}
              image='cases/mat-se-3.png'
              background='#FF6002'
              color='#fff'
              align='left'
              modifier='matSe'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.biggerPictureTitle}
              text={content.biggerPictureText}
            />

            <LargeImage src='cases/mat-se-4.jpg' alt='Mat.se phone mockups' />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='mat-se'
              similar={['stc', 'bauer-university', 'sleepcure']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
