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

  render () {
    return (
      <Base title='Mat.se' dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='MAT.SE'
              subtitle='Fresh food delivered to your door'
            />

            <LargeImage src='cases/mat-se-1.jpg' alt='Mat.se mockup' />

            <CenterBlock
              inView='inViewBottom'
              title={`Shop online,\ndinner at home`}
              text={`Mat.se is a Gothenburg-based startup and online grocery shopping service operating in Stockholm, Gothenburg and Malmö. Consumers can shop on the web or in Mat.se's apps for iOS and Android and groceries get delivered to your home or workplace.`}
              src={{ path: 'cases/mat-se-2.png', align: 'left' }}
              alt='Mat.se truck'
            />

            <SlideInBlock
              inView='inViewRight'
              title='Fast-Moving Consumer Goods'
              text={[
                'Mat.se has developed its own logistics and supply chain platform which perfectly adapts to their operations and covers all aspects of their supply chain. The platform supports and tracks everything from purchasing to warehousing to distribution.',
                'We at Future Memories teamed up with Mat.se to improve and extend their technical platform. The Mat.se backbone is based on Java technologies and leverages message-driven processing for high throughput.'
              ]}
              image={{ path: 'cases/mat-se-5.svg', width: 824, height: 262, positon: 'inside' }}
              alt='Mat.se storage illustration'
              align='right'
              modifier='flexEnd'
            />

            <ThreeBlock
              inView='inViewBottom'
              blocks={[
                { type: 'image', image: 'cases/mat-se-6.png', modifier: 'matSeIpad' },
                { type: 'text', title: 'Filling your grocery bags', text: 'Operations at Mat.se warehouses are highly digitalized. For all their daily routines, warehouse personnel use an iPad app with jacks into the logistics platform.', items: ['Goods arrival', 'Incoming deliveries', 'Inventory control', 'Order picking', 'Shipping preparation'] }
              ]}
            />

            <BookmarkBlock
              inView='inViewLeft'
              title='Delivered to your doorstep'
              text={[
                'Route planning and distribution is part of the logistics platform as well. We redefined the delivery process by developing a new iOS app for truck drivers.',
                'The app provides drivers with order information and point-to-point navigation between stops.',
                'Real-time vehicle information is fed back into the logistics platform where supervisors can control all ongoing delivery routes and interact with the drivers. Integrated barcode and QR code scanning in the app or through 3rd party scanners makes the delivery process even faster and more reliable.'
              ]}
              image='cases/mat-se-3.png'
              background='#FF6002'
              color='#fff'
              align='left'
              modifier='matSe'
            />

            <CenterBlock
              inView='inViewBottom'
              title='Seeing the bigger picture.'
              text='Beside day to day logistics, the platform is even used by managers for strategic purposes. We have developed features on top of the platform to give managers insights in purchasing, sales and delivery performance and other reports which help decision-making executives.'
            />

            <LargeImage src='cases/mat-se-4.jpg' alt='Mat.se phone mockups' />

            <ProjectsBlock
              current='mat-se'
              similar={['nordish-market', 'sleep-cycle-dashboard', 'bauer-university']}
            />

          </div>
        </div>
      </Base>
    )
  }
}
