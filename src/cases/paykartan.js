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

  render () {
    return (
      <Base title='Paykartan' dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='PAYKARTAN'
              subtitle='Who needs a wallet anyway?  '
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
              title={`Lunch time and… #!?@%!!\nYou forgot your wallet…`}
              text={`Paykartan.se is a web app that shows all restaurants near you where you can pay with your smartphone. The app includes Swish, Apple Pay and Beam.`}
              link={['Visit the site', 'https://paykartan.se/']}
            />

            <BookmarkBlock
              inView='inViewLeft'
              title='No worries'
              text={`The perfect solution when you forget your wallet or if you simply left it on purpose. The app is super easy to use, just fire it up and follow these steps:`}
              items={[
                { name: 'Find the spot', image: 'icons/location.svg', alt: 'location icon' },
                { name: 'Eat', image: 'icons/hamburger.svg', alt: 'hamburger icon' },
                { name: 'Pay', image: 'icons/phone.svg', alt: 'phone icon' }
              ]}
              image='cases/paykartan-2.png'
              alt='Holding a phone with a Paykartan open'
              background='#FFD2D2'
              align='left'
              modifier='paykartan'
            />

            <TextBlock
              inView='inViewBottom'
              title={`One step ahead`}
              text={`Paykartan is just a nice buffet of choices. Get that nice overview of your city and all the yummy places nearby.`}
              image={['Paykartan Screenshoot - gothenburg', 'cases/paykartan-3.jpg']}
            />

            <ParallaxObjectBlock
              items={[
                { image: 'cases/paykartan-phone-1.png', alt: 'Paykartan mockup: start screen', speed: -20, startPos: 17 },
                { image: 'cases/paykartan-phone-2.png', alt: 'Paykartan mockup: map view', speed: 11, startPos: -39 }
              ]}
              background='#FFD2D2'
            />

            <ProjectsBlock
              current='paykartan'
              similar={['picular', 'tennis-watch', 'retts-plus']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
