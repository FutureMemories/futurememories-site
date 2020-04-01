import { Component } from 'preact'
import inView from 'in-view'
import s from './nordish-market.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import CenterBlock from './components/center-block'
import ParallaxBumpBlock from './components/parallax-bump-block'
import ContactBlock from '../components/contact-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(2) > :first-child`,
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child`
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
    console.log(content)

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
              src='cases/nordish-market-ipad.png'
              alt={content.imageAlt}
              modifier='nordish'
            />

            <CenterBlock
              inView='inViewBottom'
              title={content.healthyFoodTitle}
              text={content.healthyFoodText}
              link={[content.visitTheSite, 'https://www.nordishmarket.com/']}
              background='#FFFFFF'
              color='#161D2B'
            />

            {/* <ParallaxBumpBlock
              inView='inViewRight'
              title={content.serviceDesignTitle}
              text={content.serviceDesignText}
              items={[
                { image: 'cases/nordish-market-phone-1.png', alt: content.imageAlt, speed: -15, startPos: 15, width: '950px', align: 'left' },
                { image: 'cases/nordish-market-phone-2.png', alt: content.imageAlt, speed: -30, startPos: -40, width: '950px', align: 'right' }
              ]}
              background='#F4F8F8'
              modifier='nordish'
            /> */}

            {/* <CenterBlock
              inView='inViewBottom'
              title={content.exerciseTitle}
              src={{ path: 'cases/antistress-2.jpg', style: { maxHeight: '715px' } }}
              alt={content.exerciseAlt}
              color='#ffffff'
            />

            <ContactBlock
              content={data.content.contactBlock}
            />

            <ProjectsBlock
              {...data.projectsBlock}
              allCases={data.allCases}
              defaultOtherCases={data.defaultOtherCases}
              current='antistress'
              similar={['sleepcure', 'retts-plus', 'stc']}
            /> */}

          </div>
        </div>
      </Base>
    )
  }
}
