import { Component } from 'preact'
import inView from 'in-view'
import s from './nordish-market.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import CenterBlock from './components/center-block'
import ParallaxBumpBlock from './components/parallax-bump-block'
import ThreeBlock from './components/three-block'
import TextAndImage from './components/text-and-image'
import TextBlock from './components/text-block'
import ContactBlock from '../components/contact-block'
import ProjectsBlock from './components/projects-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(2) > :first-child`,
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
  `${s.inner} > div:nth-child(6) > div:first-child`,
  `${s.inner} > div:nth-child(7) > div:first-child`,
  `${s.inner} > div:nth-child(8) > div:first-child`
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
    const content = data.allCases.find(c => c.id === 'nordish-market')

    return (
      <Base route='/cases/nordish-market' dark data={data} root={root}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title={content.name}
              subtitle={content.subtitle}
              type={content.type}
            />

            <LargeImage
              inView='inViewBottom'
              src='cases/nordish-market-tablets.png'
              alt={content.imageAlt}
              modifier='nordish'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.healthyFoodTitle}
              text={content.healthyFoodText}
              link={[content.visitTheSite, 'https://www.nordishmarket.com/']}
              background='#FFFFFF'
              modifier='nordish'
            />

            <ParallaxBumpBlock
              title={content.serviceDesignTitle}
              text={content.serviceDesignText}
              items={[
                { image: 'cases/nordish-market-phone-1.png', alt: content.imageAlt, speed: -10, startPos: 15, width: '391px', align: 'left' },
                { image: 'cases/nordish-market-phone-2.png', alt: content.imageAlt, speed: -20, startPos: -15, width: '391px', align: 'right' }
              ]}
              background='linear-gradient(90.28deg, #F9FDFD 0.24%, #FFFCF7 99.76%)'
              modifier='nordish'
            />

            <TextAndImage
              inView='inViewLeft'
              background='#FFFFFF'
              image={{ src: 'cases/nordish-colorblocks.png', alt: '' }}
              textBlock={{ title: content.brandingTitle, text: content.brandingText }}
              color='#737780'
              wideImage
            />

            <TextAndImage
              inView='inViewBottom'
              background='#F4F8F8'
              image={{ src: 'cases/nordish-market-design.png', alt: '' }}
              textBlock={{ title: content.techTitle, text: content.techText }}
              color='#737780'
              wideImage
              reverse
            />

            <TextBlock
              title={content.outpostTitle}
              text={content.outpostText}
              modifier='nordish'
              titleIcon='cases/nordish-title-icon.png'
            />

            <ThreeBlock
              inView='inViewRight'
              background='#F4F8F8'
              modifier='nordish-kitchen'
              blocks={[
                { type: 'text', title: content.kitchenTitle, text: content.kitchenText },
                { type: 'image', image: content.kitchenImage, modifier: 'nordishImg' }
              ]}
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='nordish-market'
              similar={['mat-se', 'bauer-university', 'stc']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
