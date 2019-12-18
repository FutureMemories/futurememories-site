import { Component } from 'preact'
import inView from 'in-view'
import s from './bandbond.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import BookmarkBlock from './components/bookmark-block'
import TextBlock from './components/text-block'
import ProjectsBlock from './components/projects-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child > div`
].join(',.')

export default class extends Component {
  componentDidMount () {
    inView.offset(200)
    inView(`.${inViewClasses}`).on('enter', el => {
      console.log(
        'ff'
      )
      el.classList.add('inView')
    })
  }

  componentWillUnmount () {
    inView(`.${inViewClasses}`).off('enter')
  }

  render () {
    return (
      <Base route='/cases/bandbond' background='#131313'>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='Bandbond'
              subtitle='Everything you love about metal in one place.'
            />

            <LargeImage
              src='cases/bandbond-video.jpg'
              video='bandbond.mp4'
              background='#131313'
            />

            <TextBlock
              color='white'
              background='#171717'
              inView='inViewBottom'
              title='Heavy metal, light app.'
              text={[
                'Bandbond is a smartphone app for iOS and Android, bringing metal fans and bands closer together. A community app allowing you to follow your favorite bands and individual band members.',
                'Follow a band in Bandbond and get access to all official Social Media posts plus exclusive Bandbond produced content. Explore and get in touch with new metal band and check the Bandbond your calendar for upcoming concerts.'
              ]}
              link={['Visit the site', 'https://bandbond.com/']}
            />

            <BookmarkBlock
              title='Getting closer to the fans'
              text={[
                'Bandbond was initiated by band members of Swedish band Dark Tranquillity. During their 30 years in music business, they have used different online channels to reach they fans. Starting with forums in the 90s, MySpace in the 00s ending up with Facebook, Instagram and Twitter nowadays.',
                'Algorithms of today’s Social Media platforms heavily control what content is presented to their end users. Bands posting content on those platforms can no longer rely on reaching all their followers. As a consequence, bands and fans get more and more detached from each other. Bandbond is an effort to bridge this gap by bringing bands closer to their fanbase.'
              ]}
              inView='inViewLeft'
              image='cases/bandbond-1.png'
              background='#131313'
              color='white'
              modifier='bandbondPhone'
            />

            <BookmarkBlock
              title='No treble. Just good.'
              text={[
                'Since Bandbond was developed by members of the metal community, the project got a lot of traction from the start. A lot of other metal bands jump on the bandwagon. In the first release of Bandbond, it’s possible to follow over 150 of the biggest metal and hard rock bands in the world.',
                'Future Memories is responsible for developing and maintaining Bandbond’s native apps for both iOS and Android. The apps are targeting both fans and bands. The majority of users are fans who want to consume content of their favorite bands. At the same time, band members are using the same app to maintain their feed and to post content to their audience.'
              ]}
              inView='inViewRight'
              image='cases/bandbond-3.png'
              color='white'
              align='left'
              modifier='bandbondPhoneBg'
            />

            <ProjectsBlock
              current='bandbond'
              similar={['sleepcure', 'picular', 'bauer-university']}
              background='#171717'
            />

          </div>
        </div>
      </Base>
    )
  }
}
