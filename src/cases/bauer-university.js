import { Component } from 'preact'
import inView from 'in-view'
import s from './bauer-university.sass'
import Base from '../_base'

import HeroHeader from './components/hero-header'
import LargeImage from './components/large-image'
import ProjectsBlock from './components/projects-block'
import TextGridBlock from './components/text-grid-block'
import ThreeBlock from './components/three-block'
import CenterBlock from './components/center-block'

const inViewClasses = [
  `${s.inner} > div:nth-child(3) > div:first-child > div`,
  `${s.inner} > div:nth-child(4) > div:last-child > div`,
  `${s.inner} > div:nth-child(5) > div:first-child`,
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

  render () {
    return (
      <Base title='Bauer University' dark>
        <div class={s.view} >
          <div class={s.inner}>

            <HeroHeader
              title='BAUER UNIVERSITY'
              subtitle='Better knowledge, better sales'
            />

            <LargeImage src='cases/bauer-university-1.jpg' alt='Bauer tablet mockup' />

            <CenterBlock
              inView='inViewBottom'
              title={`Taking sales from Rookie to Pro`}
              text='Bauer University is a global learning platform for Bauer retailers. It educates sales personel about Bauer’s assortment and teaches how to help customers finding the right hockey gear for their specific needs.'
            />

            <TextGridBlock
              blocks={[
                { inView: 'inViewLeft', image: 'cases/bauer-university-2.png', alt: 'Bauer University (Sales Training) tablet mockup' },
                { inView: 'inViewRight', title: 'Gamification is the carrot, Bauer makes the sticks', desc: `Bauer University helps retailers to become more knowledgeable through product trainings for Bauer equipment and real-world sales scenarios. Motivation is kept up by well thought-out gamification concepts where achievements result in both physical and digital rewards. All wrapped up in an extremely polished web-based experience.` },
                { inView: 'inViewRight', image: 'cases/bauer-university-3.png', alt: 'Bauer University (Product Category) tablet mockup' }, { inView: 'inViewLeft', image: 'cases/bauer-university-4.png', alt: 'Bauer University (Product Training) tablet mockup' }
              ]}
              background='#151D20'
              color='#ffffff'
            />

            <ThreeBlock
              inView='inViewBottom'
              background='#F9F9FA'
              blocks={[
                { type: 'image', image: 'cases/bauer-university-5.png', modifier: 'matSeIpad' },
                { type: 'text', title: 'Putting the biscuit in the basket', text: 'Bauer University is the result of bringing UX experts, game designers and developers together. We developed a game-like achievement system with experience points and ranks and built everything from the ground up. The game engine is developed in Python, using well-established Open Source frameworks. The user interface is a React-based web application, making Bauer University accessible to almost any device. Communication between the frontend and game engine happens through our own GraphQL interface.' }
              ]}
            />

            <CenterBlock
              inView='inViewBottom'
              background='#F5F5F5'
              text={`Bauer University is the result of combining forces with our\ncreative friends over at The Bond Communication. 🖤`}
            />

            <ProjectsBlock current='bauer-university' background='#ffffff' />

          </div>
        </div>
      </Base>
    )
  }
}
