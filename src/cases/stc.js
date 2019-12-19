import { Component } from 'preact'
import inView from 'in-view'
import Base from '../_base'
import s from './stc.sass'

import BookmarkBlock from './components/bookmark-block'
import CenterBlock from './components/center-block'
import DeviceBlock from './components/device-block'
import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ParallaxObjectBlock from './components/parallax-object-block'
import ProjectsBlock from './components/projects-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:first-child > div`,
  `${s.inner} > div:nth-child(6) > div:first-child > div`,
  `${s.inner} > div:nth-child(8) > div:first-child > div`,
  `${s.inner} > div:nth-child(9) > div:first-child > div`,
  `${s.inner} > div:nth-child(10) > div:first-child > div`,
  `${s.inner} > div:nth-child(11) > div:first-child > div`
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
      <Base route='/cases/stc' dark>
        <div class={s.view}>
          <div class={s.inner}>

            <HeroHeader
              title='STC'
              subtitle='Making training easy!'
            />

            <LargeImage
              src='cases/stc-1.jpg'
              alt='STC website / mobile-app mockups'
              width='1246'
              height='615'
              background='#FE5302'
            />

            <CenterBlock
              inView='inViewBottom'
              title='Explain STC in short'
              text='STC is a Gothenburg-based startup and online grocery shopping service operating in Stockholm, Gothenburg and Malmö. Consumers can shop on the web or in STC apps for iOS and Android and groceries get delivered to your home or workplace.'
              background='#FFFFFF'
              color='#737780'
            />

            <BookmarkBlock
              className={s.websiteSection}
              title='Website/check out lorem ipsum'
              text='Operations at Mat.se warehouses are highly digitalized. For all their daily routines, warehouse personnel use an iPad app with jacks into the logistics platform. personnel use an iPad app with jacks into the logistics platform.personnel use an iPad app with jacks into the logistics platform.'
              inView='inViewLeft'
              image='cases/stc-2.jpg'
              background='white'
              color='#737780'
              align='left'
            />

            <ParallaxObjectBlock
              className={s.horizontalParallax}
              items={[
                { image: 'cases/stc-3.jpg', speed: -20, startPos: -40 },
                { image: 'cases/stc-4.jpg', speed: 20, startPos: -70 }
              ]}
              horizontal
            />

            <CenterBlock
              className={s.appSection}
              inView='inViewBottom'
              title='App, app & app'
              text='Beside day to day logistics, the platform is even used by managers for strategic purposes. We have developed features on top of the platform to give managers insights in purchasing, sales and delivery performance and other reports which help decision-making executives.'
              background='#FFFFFF'
              color='#737780'
            />

            <CenterBlock
              src={{ path: 'cases/stc-5.jpg',
                style: { maxHeight: '812px' } }}
              color='#ffffff'
            />

            <CenterBlock
              className={s.getAppSection}
              inView='inViewBottom'
              color='#737780'
              title='Link to app store & Google Play lorem lorem'
              text='Mat.se has developed its own logistics and supply chain platform which perfectly adapts to their operations and covers all aspects of their supply chain. The platform supports and tracks everything from purchasing to warehousing to distribution.'
            >
              <DeviceBlock
                customClass={s.deviceBlock}
                ios='https://apps.apple.com/us/app/stc-training-club/id575468749'
                // andriod='https://....'
              />
              <img class={s.devices} src={require('../images/cases/stc-6.jpg')} />
            </CenterBlock>

            <BookmarkBlock
              className={s.iconsBlock}
              title='Icons'
              text='Mat.se has developed its own logistics and supply chain platform which perfectly adapts to their operations and covers all aspects of their supply chain. The platform supports and tracks everything from purchasing to warehousing to distribution.'
              inView='inViewLeft'
              background='#FAFAFA'
              color='#737780'
            >
              <div class={s.icons} />
            </BookmarkBlock>

            <BookmarkBlock
              className={s.lampSection}
              image='cases/stc-7.jpg'
              title='Connect physical enviroment with digital experience'
              text='Mat.se is a Gothenburg-based startup and online grocery shopping service operating in Stockholm, Gothenburg and Malmö. ldkfmsdlk klsdmfldsk sldk.'
              inView='inViewRight'
              align='left'
              background='white'
              color='#737780'
            >
              <div class={s.lamp}>
                <img src={require('../images/cases/stc-8.png')} />
              </div>
            </BookmarkBlock>

            <BookmarkBlock
              className={s.workoutSection}
              image='cases/stc-9.jpg'
              text={[
                'Mat.se is a Gothenburg-based startup and online grocery shopping service operating in Stockholm, Gothenburg and Malmö. ldkfmsdlk klsdmfldsk sldk. Mat.se is a Gothenburg-based startup and online grocery shopping service operating in Stockholm.',
                'Gothenburg and Malmö. ldkfmsdlk klsdmfldsk sldk.Mat.se is a Gothenburg-based startup and online grocery shopping service operating in Stockholm, Gothenburg and Malmö. ldkfmsdlk klsdmfldsk sldk.'
              ]}
              inView='inViewLeft'
              background='white'
              color='#737780'
            />

            <LargeImage
              src='cases/stc-1.jpg'
              alt='STC website / mobile-app mockups'
              width='1246'
              height='615'
              background='#FE5302'
            />

            <ProjectsBlock
              current='stc'
              similar={['antistress', 'retts-plus', 'picular']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
