import { Component } from 'preact'
import s from './paykartan.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import TextBlock from './components/text-block'
import ProjectsBlock from './components/projects-block'
import BookmarkBlock from './components/bookmark-block'
import ParallaxObjectBlock from './components/parallax-object-block'

export default class extends Component {
  render () {
    return (
      <Base dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='PAYKARTAN'
              subtitle='Who needs a wallet anyway?  '
            />

            <LargeImage
              src='cases/paykartan-1.png'
              width='590'
              height='530'
              background='#FFD2D2'
            />

            <TextBlock
              title={`Lunch time and… #!?@%!!\nYou forgot your wallet…`}
              text={`Paykartan.se is a web app that shows all restaurants near you where you can pay with your smartphone. The app includes Swish, Apple Pay and Beam.`}
              link={['Visit the site', 'https://paykartan.se/']}
            />

            <BookmarkBlock
              title='No worries'
              text={`The perfect solution when you forget your wallet or if you simply left it on purpose. The app is super easy to use, just fire it up and follow these steps:`}
              items={[
                { name: 'Find the spot', image: 'icons/location.svg' },
                { name: 'Eat', image: 'icons/hamburger.svg' },
                { name: 'Pay', image: 'icons/phone.svg' }
              ]}
              image='cases/paykartan-2.png'
              background='#FFD2D2'
              align='left'
              modifier='paykartan'
            />

            <TextBlock
              title={`One step ahead`}
              text={`Paykartan is just a nice buffet of choices. Get that nice overview of your city and all the yummy places nearby.`}
              image={['Paykartan Screenshoot - gothenburg', 'cases/paykartan-3.jpg']}
            />

            <ParallaxObjectBlock
              items={[
                { image: 'cases/paykartan-phone-1.png', speed: -20, startPos: 17 },
                { image: 'cases/paykartan-phone-2.png', speed: 11, startPos: -39 }
              ]}
              background='#FFD2D2'
            />

            <ProjectsBlock current='paykartan' />

          </div>
        </div>
      </Base>
    )
  }
}
