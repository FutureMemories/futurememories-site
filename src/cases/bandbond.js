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

  render ({ data }) {
    return (
      <Base route='/cases/bandbond' background='#131313' data={data}>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='Bandbond'
              subtitle='Everything you love about hard rock and metal in one place.'
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
              title='Heavy metal, light app.'
              text={[
                'Bandbond is a community app bringing you closer to your favorite bands and band members. Using Bandbond, you get full access to all official social media content published by your favourite bands. In the app, you also get access to exclusively produced material for Bandbond users.',
                'Deep dive into the world of hard rock and metal, explore new bands and, of course, check your calendar for upcoming concerts and live events. Download the app and start crowd surfing metal world, tap by tap.'
              ]}
              link={['Visit the site', 'https://bandbond.com/']}
            />

            <BookmarkBlock
              title='Re-entering the mosh pit'
              text={[
                'The app fills one core purpose; to bring bands closer to their fans again. During their 30 years in the music industry, Swedish death metal band Dark Tranquillity explored the idea after experiencing a growing detachment to their fans by using conventional social media channels. Over the years they have used different platforms to reach their fanbase, starting with forums in the 90s, MySpace in the 00s then moving on to Facebook, Instagram and Twitter.',
                "Todays' social media algorithms make it harder to reach out to the entire audience. Bands posting content on social platforms like Facebook and Instagram can no longer fully rely on that they actually appear in their fans social feed. Bandbond to is a joint effort to bridge this gap by bringing bands closer to their fanbase again."
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
                'Since Bandbond is created by and for the metal community, the project got a lot of traction already from the start. A great number of metal bands instantly jumped on the bandwagon. By the first release of Bandbond in 2019, over 150 of the biggest metal and hard rock bands in the world had already signed up their accounts.',
                'The majority of users are fans who want to consume content of their favorite bands. Simultaneously, band members are using the same app to maintain their feed and to post content to their audience.'
              ]}
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
              component={<p>{'Future Memories are behind the development and maintenance of Bandbond\'s native apps for both iOS and Android. Designing and developing this app is an ongoing collaboration with our friends at '}<a href='https://www.madinsweden.com/' target='_blank' rel='noopener noreferrer'>Mad in Sweden</a> and <a href='https://bandbond.com/' target='_blank' rel='noopener noreferrer'>Bandbond</a>. Together we rock! 🤘</p>}
            />

            <ProjectsBlock
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
