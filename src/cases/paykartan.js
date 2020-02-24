import { Component } from 'preact'
import inView from 'in-view'
import s from './paykartan.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextBlock from './components/text-block'
import ProjectsBlock from './components/projects-block'
import BookmarkBlock from './components/bookmark-block'
import ParallaxObjectBlock from './components/parallax-object-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`
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
    const content = data.allCases.find(c => c.id === 'paykartan')

    return (
      <Base route='/cases/paykartan' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name.toUpperCase()}
              subtitle={content.subtitle}
            />

            <LargeImage
              src='cases/paykartan-1.png'
              alt='Paykartan phone mockups'
              width='590'
              height='530'
              background='#FFD2D2'
            />

            <TextBlock
              inView='inViewBottom'
              title={content.lunchtimeTitle}
              text={content.lunchtimeText}
              link={[data.content.visitTheSite, 'https://paykartan.se/']}
            />

            <BookmarkBlock
              inView='inViewLeft'
              title={content.noWorriesTitle}
              text={content.noWorriesText}
              items={[
                { name: content.findTheSpot, image: 'icons/location.svg', alt: 'location icon' },
                { name: content.eat, image: 'icons/hamburger.svg', alt: 'hamburger icon' },
                { name: content.pay, image: 'icons/phone.svg', alt: 'phone icon' }
              ]}
              image='cases/paykartan-2.png'
              alt={content.holdingAPhone}
              background='#FFD2D2'
              align='left'
              modifier='paykartan'
            />

            <TextBlock
              inView='inViewBottom'
              title={content.oneStepAheadTitle}
              text={content.oneStepAheadText}
              image={[content.oneStepAheadAlt, 'cases/paykartan-3.jpg']}
            />

            <ParallaxObjectBlock
              items={[
                { image: 'cases/paykartan-phone-1.png', alt: 'Paykartan mockup: start screen', speed: -20, startPos: 17 },
                { image: 'cases/paykartan-phone-2.png', alt: 'Paykartan mockup: map view', speed: 11, startPos: -39 }
              ]}
              background='#FFD2D2'
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='paykartan'
              similar={['picular', 'tennis-watch', 'retts-plus']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
